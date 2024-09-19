import { signIn, auth, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
      </>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", {
          callbackUrl: `http://localhost:3000/api/auth/callback`,
        });
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  );
}
