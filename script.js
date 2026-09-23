```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <meta
    name="description"
    content="TZWeb — Build beautiful websites with powerful AI."
  >

  <meta name="theme-color" content="#0a0a0a">

  <title>TZWeb — Build Your Website With AI</title>

  <link rel="stylesheet" href="style.css">
</head>

<body>

  <!-- =========================
       APP
  ========================== -->

  <div id="app">

    <!-- =========================
         NAVIGATION
    ========================== -->

    <header class="site-header">
      <nav class="navbar container" aria-label="Main navigation">

        <a href="/" class="brand" aria-label="TZWeb home">
          <span class="brand-mark">TZ</span>
          <span class="brand-name">TZWeb</span>
        </a>

        <div class="nav-links">
          <a href="#features">Features</a>
          <a href="#templates">Templates</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div class="nav-actions">
          <button
            type="button"
            class="btn btn-ghost"
            id="loginBtn"
          >
            Log in
          </button>

          <button
            type="button"
            class="btn btn-primary"
            id="startBuildingBtn"
          >
            Start building
          </button>
        </div>

        <button
          type="button"
          class="mobile-menu-btn"
          id="mobileMenuBtn"
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          ☰
        </button>

      </nav>
    </header>


    <!-- =========================
         MAIN CONTENT
    ========================== -->

    <main>

      <!-- =========================
           HERO
      ========================== -->

      <section class="hero" id="hero">

        <div class="container hero-content">

          <div class="hero-copy">

            <div class="eyebrow">
              <span class="status-dot"></span>
              AI-powered website builder
            </div>

            <h1>
              Build the website
              <span class="gradient-text">you actually want.</span>
            </h1>

            <p class="hero-description">
              Create, customize, and launch beautiful websites without
              fighting complicated website builders.
            </p>

            <div class="hero-actions">

              <button
                type="button"
                class="btn btn-primary btn-large"
                id="heroStartBtn"
              >
                Start building
                <span aria-hidden="true">→</span>
              </button>

              <button
                type="button"
                class="btn btn-secondary btn-large"
                id="viewTemplatesBtn"
              >
                Explore templates
              </button>

            </div>

            <p class="hero-note">
              Free to start. No credit card required.
            </p>

          </div>


          <!-- Website preview -->

          <div class="hero-preview">

            <div class="preview-window">

              <div class="preview-toolbar">

                <div class="window-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div class="preview-url">
                  yoursite.tzweb.site
                </div>

                <div class="preview-toolbar-spacer"></div>

              </div>

              <div class="preview-content">

                <div class="preview-nav">
                  <strong>Your Brand</strong>

                  <div class="preview-nav-links">
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>
                </div>

                <div class="preview-hero">

                  <div class="preview-text">

                    <span class="preview-label">
                      YOUR BUSINESS
                    </span>

                    <h2>
                      Make your
                      <br>
                      idea happen.
                    </h2>

                    <p>
                      A beautiful website built with TZWeb.
                    </p>

                    <span class="preview-button">
                      Get started
                    </span>

                  </div>

                  <div class="preview-visual">
                    <div class="preview-card"></div>
                    <div class="preview-card small"></div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- =========================
           FEATURES
      ========================== -->

      <section class="section" id="features">

        <div class="container">

          <div class="section-heading">

            <span class="section-label">
              FEATURES
            </span>

            <h2>
              Everything you need to build.
            </h2>

            <p>
              TZWeb gives you the tools to go from an idea
              to a real website.
            </p>

          </div>


          <div class="features-grid">

            <article class="feature-card">

              <div class="feature-icon">
                ✦
              </div>

              <h3>
                AI Website Builder
              </h3>

              <p>
                Describe what you want and let TZWeb help
                turn your idea into a website.
              </p>

            </article>


            <article class="feature-card">

              <div class="feature-icon">
                ◈
              </div>

              <h3>
                Powerful Editor
              </h3>

              <p>
                Customize your layout, colors, typography,
                content, and sections exactly how you want.
              </p>

            </article>


            <article class="feature-card">

              <div class="feature-icon">
                ◆
              </div>

              <h3>
                Ready-made Templates
              </h3>

              <p>
                Start with a professionally designed template
                instead of starting from nothing.
              </p>

            </article>


            <article class="feature-card">

              <div class="feature-icon">
                ↗
              </div>

              <h3>
                Publish Anywhere
              </h3>

              <p>
                Turn your finished project into a real website
                that people can visit.
              </p>

            </article>

          </div>

        </div>

      </section>


      <!-- =========================
           AI AGENT
      ========================== -->

      <section class="section ai-section" id="ai">

        <div class="container">

          <div class="ai-layout">

            <div class="ai-copy">

              <span class="section-label">
                TZWEB AI
              </span>

              <h2>
                Your website.
                <span class="gradient-text">
                  Your instructions.
                </span>
              </h2>

              <p>
                Tell TZWeb what you want changed and let the
                AI handle the work.
              </p>

              <ul class="ai-list">

                <li>
                  <span>✓</span>
                  Change layouts
                </li>

                <li>
                  <span>✓</span>
                  Rewrite content
                </li>

                <li>
                  <span>✓</span>
                  Generate sections
                </li>

                <li>
                  <span>✓</span>
                  Improve your design
                </li>

              </ul>

              <button
                type="button"
                class="btn btn-primary"
                id="aiLearnMoreBtn"
              >
                Explore TZWeb AI
              </button>

            </div>


            <div class="ai-demo">

              <div class="ai-window">

                <div class="ai-window-header">

                  <div>
                    <strong>TZWeb AI</strong>
                    <span class="ai-status">
                      ● Online
                    </span>
                  </div>

                </div>


                <div class="ai-messages">

                  <div class="ai-message user-message">
                    Make the homepage feel more premium and
                    add a testimonials section.
                  </div>

                  <div class="ai-message assistant-message">

                    <div class="ai-avatar">
                      TZ
                    </div>

                    <div>
                      Done. I've redesigned the hero section
                      and added a testimonials section.
                    </div>

                  </div>

                </div>


                <div class="ai-input">

                  <input
                    type="text"
                    placeholder="Tell TZWeb what to change..."
                    aria-label="Tell TZWeb what to change"
                    disabled
                  >

                  <button
                    type="button"
                    disabled
                    aria-label="Send message"
                  >
                    ↑
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- =========================
           HOW IT WORKS
      ========================== -->

      <section class="section" id="how-it-works">

        <div class="container">

          <div class="section-heading">

            <span class="section-label">
              HOW IT WORKS
            </span>

            <h2>
              From idea to website.
            </h2>

          </div>


          <div class="steps-grid">

            <article class="step">

              <span class="step-number">
                01
              </span>

              <h3>
                Choose a starting point
              </h3>

              <p>
                Start from a template or create something
                completely from scratch.
              </p>

            </article>


            <article class="step">

              <span class="step-number">
                02
              </span>

              <h3>
                Make it yours
              </h3>

              <p>
                Customize your content, design, images,
                sections, and branding.
              </p>

            </article>


            <article class="step">

              <span class="step-number">
                03
              </span>

              <h3>
                Publish
              </h3>

              <p>
                When you're ready, publish your website
                and share it with the world.
              </p>

            </article>

          </div>

        </div>

      </section>


      <!-- =========================
           TEMPLATES
      ========================== -->

      <section class="section templates-section" id="templates">

        <div class="container">

          <div class="section-heading">

            <span class="section-label">
              TEMPLATES
            </span>

            <h2>
              Start with something beautiful.
            </h2>

            <p>
              Choose a starting point and customize it
              however you want.
            </p>

          </div>


          <div class="templates-grid">

            <article class="template-card">

              <div class="template-preview template-business">
                <span>BUSINESS</span>
              </div>

              <div class="template-info">
                <h3>Modern Business</h3>
                <span>Business</span>
              </div>

            </article>


            <article class="template-card">

              <div class="template-preview template-portfolio">
                <span>PORTFOLIO</span>
              </div>

              <div class="template-info">
                <h3>Creative Portfolio</h3>
                <span>Portfolio</span>
              </div>

            </article>


            <article class="template-card">

              <div class="template-preview template-store">
                <span>STORE</span>
              </div>

              <div class="template-info">
                <h3>Minimal Store</h3>
                <span>Store</span>
              </div>

            </article>

          </div>

        </div>

      </section>


      <!-- =========================
           PRICING
      ========================== -->

      <section class="section" id="pricing">

        <div class="container">

          <div class="section-heading">

            <span class="section-label">
              PRICING
            </span>

            <h2>
              Start free. Upgrade when you need more.
            </h2>

          </div>


          <div class="pricing-grid">

            <!-- Free -->

            <article class="pricing-card">

              <span class="pricing-label">
                FREE
              </span>

              <h3>
                Starter
              </h3>

              <p class="pricing-description">
                Everything you need to start building.
              </p>

              <div class="price">
                ₦0
                <span>/ forever</span>
              </div>

              <ul class="pricing-features">

                <li>✓ Website builder</li>
                <li>✓ Basic templates</li>
                <li>✓ Live preview</li>
                <li>✓ Basic customization</li>

              </ul>

              <button
                type="button"
                class="btn btn-secondary btn-full"
                id="freePlanBtn"
              >
                Start for free
              </button>

            </article>


            <!-- Premium -->

            <article class="pricing-card featured">

              <div class="popular-badge">
                MOST POWERFUL
              </div>

              <span class="pricing-label">
                PREMIUM
              </span>

              <h3>
                TZWeb AI
              </h3>

              <p class="pricing-description">
                Unlock the full AI website-building experience.
              </p>

              <div class="price">
                ₦—
                <span>/ month</span>
              </div>

              <ul class="pricing-features">

                <li>✓ Everything in Starter</li>
                <li>✓ Premium AI Agent</li>
                <li>✓ AI design changes</li>
                <li>✓ AI content generation</li>
                <li>✓ Advanced templates</li>
                <li>✓ Premium features</li>

              </ul>

              <button
                type="button"
                class="btn btn-primary btn-full"
                id="premiumPlanBtn"
              >
                Get Premium
              </button>

            </article>

          </div>

        </div>

      </section>


      <!-- =========================
           FINAL CTA
      ========================== -->

      <section class="final-cta">

        <div class="container">

          <div class="cta-content">

            <span class="section-label">
              READY?
            </span>

            <h2>
              Build something people remember.
            </h2>

            <p>
              Start creating your website with TZWeb today.
            </p>

            <button
              type="button"
              class="btn btn-primary btn-large"
              id="finalStartBtn"
            >
              Start building
              <span aria-hidden="true">→</span>
            </button>

          </div>

        </div>

      </section>

    </main>


    <!-- =========================
         FOOTER
    ========================== -->

    <footer class="site-footer">

      <div class="container footer-content">

        <div class="footer-brand">

          <a href="/" class="brand">
            <span class="brand-mark">TZ</span>
            <span class="brand-name">TZWeb</span>
          </a>

          <p>
            Build websites. Your way.
          </p>

        </div>


        <div class="footer-links">

          <div>
            <h4>Product</h4>

            <a href="#features">Features</a>
            <a href="#templates">Templates</a>
            <a href="#pricing">Pricing</a>
          </div>


          <div>
            <h4>Company</h4>

            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>


          <div>
            <h4>Legal</h4>

            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>

        </div>

      </div>


      <div class="container footer-bottom">

        <span>
          © <span id="currentYear"></span> TZWeb. All rights reserved.
        </span>

        <span>
          Built with TZWeb.
        </span>

      </div>

    </footer>

  </div>


  <!-- =========================
       SCRIPTS
  ========================== -->

  <script src="script.js" defer></script>

</body>
</html>
```

This gives us the **full skeleton**. I intentionally left pricing as `₦—` for now rather than pretending we've decided the actual Premium price.

Next we can make `style.css` absolutely cook 🔥 — responsive layout, glassy cards, animations, dark theme, gradients, mobile nav, and the whole TZWeb visual identity.

