import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/conversations/:path*", "/users/:path*"],
};


//note this :path* is going to make it so it covers routes like:
// /users/test/messages etc
