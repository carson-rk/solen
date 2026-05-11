export default function HomePage() {
    return (
      <>
        <header>
          <nav className="content-width flex items-center justify-between py-6 px-2">
  
          {/* LOGO */}
          <div>
            <p className="text-2xl font-(--font-heading)">AlignWell</p>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden">
            <a href="#">Explore</a>
            <a href="#">Stories</a>
            <a href="#">Support</a>
          </div>
          <div className="flex gap-4 items-center">

          {/* MENU BUTTON */}
            <button className="flex items-center justify-center text-(--primary)">

              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="30"
                  height="30"
                  x="10"
                  y="20"
                  fill="currentColor"
                />

                <rect
                  width="30"
                  height="30"
                  x="10"
                  y="60"
                  fill="currentColor"
                />

                <rect
                  width="10"
                  height="30"
                  x="60"
                  y="20"
                  fill="currentColor"
                />

                <rect
                  width="30"
                  height="10"
                  x="50"
                  y="30"
                  fill="currentColor"
                />

                <rect
                  width="30"
                  height="30"
                  x="50"
                  y="60"
                  fill="currentColor"
                />
              </svg>

            </button>

            {/* SIGN IN BUTTON */}
            <button className="px-2 py-1 rounded-md bg-(--primary) text-white">
              Sign In
            </button>
          </div>

          </nav>
        </header>

        <main>
        
  
        {/* HERO SECTION */}
        <section className="section-spacing grid gap-4">
          <div className="content-width">
            <h1 className="text-4xl leading-tight max-w-3xl">Overwhelmed? Support That Adapts To You</h1>
          </div>
          <p className="text-xl max-w-2xl">
            A private space to pause, reflect,
            and find clarity.
          </p>
          <div className="flex gap-4">
            <button className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white">
            Start Reflection
            </button>
            <button className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white">
            How It Works
            </button>
          </div>
        </section>
  
  
        {/* TRUST SECTION */}
        <section className="section-spacing">
          <h2 className="text-3xl">
            Built to Feel Safe
          </h2>
  
          <ul className="grid gap-2 pt-4">
            <li>Fully confidential</li>
            <li>For students</li>
            <li>Available anytime</li>
            <li>Pesronalized adaptation</li>
          </ul>
        </section>
  
  
        {/* PROBLEM SECTION */}
        <section className="section-spacing">
          <h2 className="text-3xl">
          Not Everything Heavy Looks Loud
          </h2>
          <p className="pt-4">Many people carry emotional weight quietly. Alignwell helps you notice what you may have been carrying for too long alone.</p>

          <div className="grid gap-4 pt-4">
            <article>
              <h3>Academic Pressure</h3>
              <p>
              Assignments pile up. Expectations rise. Rest starts feeling undeserved. Slowly, achievement becomes tied to self-worth, and even small setbacks begin to feel personal.
              </p>
            </article>
    
            <article>
              <h3>Social Exhaustion</h3>
              <p>
                Online pressure can leave you feeling behind in your own life without fully understanding why, or be surrounded by people and still feel emotionally distant.
              </p>
            </article>
    
            <article>
              <h3>Uncertain Futures</h3>
              <p>
              The future can begin to feel less exciting and more overwhelming. Questions about purpose, direction, identity, and survival often arrive all at once.
              </p>
            </article>
    
            <article>
              <h3>Family Stress</h3>
              <p>
              Pressure from home, financial strain, conflict, or responsibility can quietly shape how safe and stable life feels. Some burdens are inherited long before they are spoken about.
              </p>
            </article>
          </div>
        </section>
  
  
        {/* ABOUT SECTION */}
        <section className="section-spacing">
          <div className="pt-4"></div>
          <h2 className="text-3xl">
            Support That Adapts
          </h2>
          <div className="pt-4 flex flex-col gap-4 items-center">
            <p>
            Alignwell is a guided support system designed to help students and young people understand where they are emotionally and what kind of support may help them move forward. Through peer connection, guided reflection, anonymous check-ins, curated support content, and counselor referral pathways, the platform helps users navigate difficult seasons with more clarity and less isolation.
            </p>
    
            <button className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white">
              Explore Alignwell
            </button>
          </div>
        </section>
  
  
        {/* PROCESS SECTION */}
        <section className="section-spacing">
          <h2 className="text-3xl">
            How It Works
          </h2>
          <div className="grid gap-4 pt-4">
            <article>
              <h3>1. Reflect</h3>
              <p>
              Take a quiet moment to reflect on how life has been feeling lately.
              </p>
            </article>
    
            <article>
              <h3>2. Understand</h3>
              <p>
              Receive gentle guidance that helps you make sense of what you may be carrying.
              </p>
            </article>
    
            <article>
              <h3>3. Connect</h3>
              <p>
              Find support that matches your current needs — peer support, guided resources, anonymous tools, or counselor referral.
              </p>
            </article>
          </div>
        </section>
  
  
        {/* CTA SECTION */}
        <section className="section-spacing">
          <h2 className="text-3xl">
            Start where you are.
          </h2>
          <div className="grid gap-4 pt-4">
          <p>
          Support does not need to begin with a crisis. Sometimes it begins with honesty, reflection, and one small step toward clarity. Alignwell gives you a private space to start that process without pressure or judgment.
          </p>

          <div className="flex gap-4">
  
          <button className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white">
          Create Free Account
          </button>

          <button className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white">
            Learn More
          </button>
          </div>
          </div>
        </section>
  
      </main>

      <footer>
      <section className="section-spacing">
          <p>
          Alignwell is a stepped support platform helping students and young people navigate emotional overwhelm, pressure, isolation, and uncertainty with clarity and connection.
          </p>
          <p>
          You are enough — no matter what you are carrying.
          </p>
        </section>
      </footer>
      </>
    );
  }