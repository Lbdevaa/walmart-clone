This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Components

Server components

Header is going to get rendered every time because it's part of the root layout.

So we will never have to worry about where does the header get lay. Rendered and so forth right it will always.

The children in layout will just simply get rendered in based on which screen we're in.

Whenever you need interactivity inside of a server component you need to go ahead and introduce State.
Problem: is with server components you don't have a window object because it's rendered on the server.
So when you're doing any sort of you know interactive work you need to go ahead and actually convert it to a client component.

"use client" at the top of the file and is now this being rendered on the client.

- shadcn - collection of reusable components

- lucide - icon library