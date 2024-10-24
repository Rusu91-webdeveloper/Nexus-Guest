import { BubbleChat } from "flowise-embed-react";
import { CardContent } from "@/components/ui/card";
import logo from "@/assets/logo.png";

export default function ChatBot() {
  return (
    <CardContent
      className="fixed bottom-4 right-8 z-50"
      style={{
        maxWidth: "500px",
      }}
    >
      <BubbleChat
        chatflowid="46a008d0-ac84-40a7-9151-8ec2995c09a2"
        apiHost="http://localhost:3000"
        theme={{
          button: {
            backgroundColor: "hsl(var(--primary)/0.1)",
            right: 40,
            bottom: 45,
            size: 60,
            iconColor: "hsl(var(--primary-foreground))",
            customIconSrc: logo.src,
          },
          chatWindow: {
            showTitle: true,
            title: "Nexus Assistant",
            titleAvatarSrc: logo.src,
            welcomeMessage: "Welcome to Nexus! How can I assist you today?",
            backgroundColor: "hsla(var(--background) / 0.4)",
            height: 450,
            width: 400,
            fontSize: 14,
            poweredByTextColor: "hsl(var(--muted-foreground))",
            botMessage: {
              backgroundColor: "hsla(var(--muted) / 0.8)",
              textColor: "hsl(var(--foreground))",
              showAvatar: true,
              avatarSrc: logo.src,
            },
            userMessage: {
              backgroundColor: "hsla(var(--primary) / 0.8)",
              textColor: "hsl(var(--primary-foreground))",
              showAvatar: true,
              avatarSrc: "/user-avatar.png",
            },
            textInput: {
              placeholder: "Type your message...",
              backgroundColor: "hsla(var(--background) / 0.8)",
              textColor: "hsl(var(--foreground))",
              sendButtonColor: "hsl(var(--primary))",
            },
            footer: {
              textColor: "#303235",
              text: "Powered by",
              company: "Rusu Emanuel",
              companyLink: "https://portofolio-ruby-tau.vercel.app/",
            },
          },
        }}
      />
    </CardContent>
  );
}
