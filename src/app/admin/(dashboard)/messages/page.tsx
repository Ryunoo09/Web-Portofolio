import { AdminPageHeader } from "@/shared/components/admin";
import { MessageInbox } from "@/features/contact/admin";
import { getContactMessages } from "@/features/contact";

export default async function AdminMessagesPage() {
  const messages = await getContactMessages();
  const unread = messages.filter((message) => !message.isRead).length;

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Pesan Masuk"
        description={`${messages.length} pesan · ${unread} belum dibaca`}
      />
      <MessageInbox messages={messages} />
    </main>
  );
}
