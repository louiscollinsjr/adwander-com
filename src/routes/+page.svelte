<script>
    import { Card } from '$lib/components/ui/card';
    // Svelte script block with dynamic page data
    const pageTitle = 'Adwander - Exploring Online Experiments';
    const pageDescription = 'Adwander is a base for various online experiments and passive income explorations. Discover our current projects.';
    const currentYear = new Date().getFullYear();
</script>

<svelte:head>
    <!-- Primary SEO Meta Tags - ADJUSTED -->
    <title>Adwander - Exploring Online Experiments</title>
    <meta name="description" content="Adwander is a base for various online experiments and passive income explorations. Discover our current projects.">

    <!-- Open Graph / Twitter - Keep structure -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://adwander.com/">
    <meta property="og:title" content={pageTitle}>
    <meta property="og:description" content={pageDescription}>
    <meta property="og:image" content={`https://adwander.com/api/og?title=${encodeURIComponent(pageTitle)}&description=${encodeURIComponent(pageDescription)}`}>

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://adwander.com/">
    <meta property="twitter:title" content={pageTitle}>
    <meta property="twitter:description" content={pageDescription}>
    <meta property="twitter:image" content={`https://adwander.com/api/og?title=${encodeURIComponent(pageTitle)}&description=${encodeURIComponent(pageDescription)}`}>


    <!-- Assuming you've imported geist-sans in your main CSS -->
    <!-- Or you can link here if needed, but importing in CSS is typical with Fontsource -->
    <!-- <link rel="stylesheet" href="@fontsource/geist-sans/index.css" /> -->

</svelte:head>

<!-- Tailwind classes applied directly -->
<div class="bg-gray-100 text-foreground font-geist-mono min-h-screen flex flex-col px-4 sm:px-6 lg:px-8">

    <header class="container mx-auto py-6 px-4">
        <div class="text-2xl font-bold">Adwander</div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">

        <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-geist-sans">
            Build, Launch, Learn,
        </h1>

        <p class="text-xl text-muted-foreground max-w-2xl mb-8">
            adwander is a space to build, launch, and learn from various online projects and passive income initiatives.
        </p>

        <!-- List of Experiments/Projects -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
            <!-- Experiment 1 Link -->
            <Card class="p-4 bg-gray-50 text-left">
                <div class="text-left">
                    <h2 class="text-sm font-semibold mb-2 text-gray-600">Project: whoami →</h2>
                    <p class="text-muted-foreground text-xs">An exploration into network information display and related income streams.</p>
                </div>
            </Card>

            <!-- Experiment 2 Link -->
            <Card class="p-4 bg-gray-50 text-left">
                <h2 class="text-sm font-semibold mb-2 text-gray-600">Project: lazymoney →</h2>
                <p class="text-muted-foreground text-xs">An exploration into passive income streams and related income streams.</p>
            </Card>

            <!-- Placeholder for future experiments -->
            <Card class="p-4 bg-black text-white text-left">
                <h2 class="text-sm font-semibold mb-2">More coming soon...</h2>
                <p class="text-sm font-semibold font-geist-sans bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Keep an eye out for new experiments and projects under the adwander umbrella.</p>
            </Card>

        </div>

         <!-- Optional: Hint at the future -->
         <section class="mt-12 text-center text-sm text-muted-foreground max-w-xl">
             <p>These experiments are the foundation for future projects, including the upcoming <strong class="text-foreground">SatchelAR App</strong>.</p>
         </section>


    </main>

    <footer class="container mx-auto py-6 px-4 text-center text-xs text-muted-foreground">
        © {currentYear} adwander.com | atem,srl. - Build, Launch, Learn, supported by ads.
        <!-- Add links like Privacy Policy, Terms (eventually) -->
    </footer>

</div>