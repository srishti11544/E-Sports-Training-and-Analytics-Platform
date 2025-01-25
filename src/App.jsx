import React from 'react';
import { 
  Trophy, 
  LineChart, 
  Gamepad2, 
  Target, 
  Users, 
  Brain,
  ArrowUpRight,
  Activity
} from 'lucide-react';
import styles from './app.module.css'; 

function App() {
  return (
    <div className={`${styles.minHeightScreen} ${styles.bgGray900} ${styles.textWhite}`}>
      {/* Hero Section */}
      <nav className={`${styles.bgGray80050} ${styles.backdropBlur} ${styles.fixedNav}`}>
        <div className={`${styles.container} ${styles.flex} ${styles.spaceBetween}`}>
          <div className={styles.flex}>
            <Trophy className={`${styles.iconSize} ${styles.textPurple500}`} />
            <span className={styles.navText}>EsportsElite</span>
          </div>
          <div className={styles.hiddenMdFlex}>
            <a href="#" className={styles.hoverTextPurple}>Dashboard</a>
            <a href="#" className={styles.hoverTextPurple}>Training</a>
            <a href="#" className={styles.hoverTextPurple}>Analytics</a>
            <a href="#" className={styles.hoverTextPurple}>Community</a>
          </div>
          <button className={`${styles.bgPurple600} ${styles.button} ${styles.hoverBgPurple700}`}>
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroImage} />
        <div className={`${styles.container} ${styles.heroTextContainer}`}>
          <div className={styles.maxWidth3xl}>
            <h1 className={styles.heroTitle}>
              Level Up Your Game with Data-Driven Training
            </h1>
            <p className={styles.heroText}>
              Advanced analytics and personalized training programs to help you reach your full potential in competitive gaming.
            </p>
            <div className={styles.heroButtons}>
              <button className={`${styles.bgPurple600} ${styles.heroBtn} ${styles.flexItemsCenter}`}>
                Get Started
                <ArrowUpRight className={`${styles.iconMargin} ${styles.iconSize}`} />
              </button>
              <button className={`${styles.borderPurple500} ${styles.heroBtn} ${styles.hoverBgPurple20}`}>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className={styles.bgGray800}>
        <div className={`${styles.container} ${styles.featuresGridContainer}`}>
          <div className={styles.featuresGrid}>
            <FeatureCard 
              icon={<LineChart className={`${styles.iconSize} ${styles.textPurple500}`} />}
              title="Performance Analytics"
              description="Track your progress with detailed statistics and performance metrics."
            />
            <FeatureCard 
              icon={<Target className={`${styles.iconSize} ${styles.textPurple500}`} />}
              title="Aim Training"
              description="Improve accuracy and reaction time with specialized drills."
            />
            <FeatureCard 
              icon={<Brain className={`${styles.iconSize} ${styles.textPurple500}`} />}
              title="Strategic Analysis"
              description="Learn from your matches with AI-powered gameplay analysis."
            />
            <FeatureCard 
              icon={<Activity className={`${styles.iconSize} ${styles.textPurple500}`} />}
              title="Real-time Tracking"
              description="Monitor your performance metrics during live gameplay."
            />
            <FeatureCard 
              icon={<Users className={`${styles.iconSize} ${styles.textPurple500}`} />}
              title="Team Analytics"
              description="Analyze team synergy and improve coordination."
            />
            <FeatureCard 
              icon={<Gamepad2 className={`${styles.iconSize} ${styles.textPurple500}`} />}
              title="Game-specific Training"
              description="Customized training programs for popular esports titles."
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.bgGray900}>
        <div className={`${styles.container} ${styles.statsContainer}`}>
          <div className={styles.statsGrid}>
            <StatCard number="50K+" label="Active Users" />
            <StatCard number="200+" label="Pro Players" />
            <StatCard number="15+" label="Supported Games" />
            <StatCard number="98%" label="Success Rate" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className={`${styles.bgGray90050} ${styles.card} ${styles.hoverCard}`}>
      <div className={styles.iconMargin}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className={styles.textCenter}>
      <div className={`${styles.text4xl} ${styles.textPurple500} ${styles.mb2}`}>{number}</div>
      <div className={styles.textGray400}>{label}</div>
    </div>
  );
}

export default App;
