"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send, X, Bot, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello. I am J.A.R.V.I.S. How may I assist you today?",
    },
  ]);

  const sendMessage = async (e?: FormEvent) => {
    e?.preventDefault();

    const message = input.trim();

    if (!message || loading) return;

    const userMessage: Message = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "AI request failed");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.reply ||
          "Sorry, I couldn't generate a response right now.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm unable to respond right now. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-[99990] w-[360px] max-w-[calc(100vw-24px)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:right-6">

          {/* Header */}
          <div className="flex items-center justify-between bg-[#D4A017] px-4 py-4">
            <div className="flex items-center gap-3">
<div className="relative flex h-11 w-11 items-center justify-center">
  <div className="absolute inset-0 rounded-full border-2 border-[#D4A017] shadow-[0_0_12px_rgba(212,160,23,0.65)]" />

  <div className="absolute inset-[4px] rounded-full border border-[#B71432]" />

  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4A017] shadow-[0_0_10px_rgba(212,160,23,0.8)]">
    <Bot size={17} className="text-[#06111d]" />
  </div>
</div>

              <div>
                <h3 className="font-bold text-[#06111d]">
                  JARVIS
                </h3>

                <p className="text-xs text-[#2b1b00]">
                  Your tender assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#06111d] transition hover:bg-black/10 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[390px] overflow-y-auto bg-[#3B0A12] px-4 py-4">
            <div className="flex flex-col gap-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "rounded-br-md bg-[#b7122f] text-white shadow-[0_4px_14px_rgba(183,18,47,0.25)]"
                        : "rounded-bl-md bg-[#5A101B] text-white shadow-sm border border-[#7A1A28]"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {/* Loading */}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-gray-100 bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
                    <Loader2
                      size={16}
                      className="animate-spin text-[#c9a227]"
                    />
                    Thinking...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="border-t border-[#7A1A28] bg-[#4A0C15] p-3"
          >
            <div className="flex items-center gap-2">
<input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Ask me anything..."
  disabled={loading}
  maxLength={2000}
  className="min-w-0 flex-1 rounded-xl border border-[#8A2433] bg-[#2E080E] px-4 py-3 text-sm !text-white placeholder:text-gray-500 outline-none transition focus:border-[#ffb52e] focus:ring-1 focus:ring-[#ffb52e]"
/>

              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b7122f] text-white transition hover:bg-[#8f0d24] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 size={19} className="animate-spin" />
                ) : (
                  <Send size={19} />
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
        className="fixed bottom-5 right-5 z-[99991] flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A017] text-[#06111d] shadow-xl transition hover:scale-105 hover:bg-[#E7B52D] sm:right-6"
      >
        {isOpen ? (
          <X size={25} />
        ) : (
          <MessageCircle size={27} />
        )}
      </button>
    </>
  );
}