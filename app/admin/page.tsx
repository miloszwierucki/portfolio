import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

const CMS = dynamic(() => import("@/components/cms-component"), { ssr: false });

const AdminPage = () => {
  return <SessionProvider>{<CMS />}</SessionProvider>;
};

export default AdminPage;
