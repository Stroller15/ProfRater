<h1 align="start">
  ProfRater - Find Your Perfect Professor with AI
</h1>

<img width="1280" alt="Astra Thumbnail" src="https://github.com/user-attachments/assets/8d11fc9c-8220-4d36-a0e3-271b73a7f23d">


## Introduction

ProfRater is an AI-powered assistant designed to help students make informed decisions about their education. Leveraging advanced AI algorithms from OpenAI and a robust search system with Pinecone, ProfRater provides personalized professor ratings, reviews, and recommendations, all within a sleek Next.js web app. Discover the best professors tailored to your learning style and academic goals with ProfRater.


## Tech Stack

- **Next.js**: For building the React-based website.
- **TailwindCSS**: For styling with utility-first CSS.
- **Shadcn UI**: For UI components.
- **Magic UI**: For UI components.
- **Clerk**: For user authentication.

## Quick Start

### Prerequisites
Make sure that you have installed
- Node.js
- Git
- npm / yarn / pnpm / bun

1. Clone this repository:

   ```bash
   git clone https://github.com/Stroller15/profrater.git
   cd profrater
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup env variables:
   ```bash
    # app
    NEXT_PUBLIC_URL=http://localhost:3000
    NEXT_PUBLIC_DOMAIN=localhost:3000
   
    # clerk
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to http://localhost:3000 to see the website in action.

## Assets
Download all the assets required for this project [here](https://drive.google.com).


   
