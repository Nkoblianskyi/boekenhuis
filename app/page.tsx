import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedBooks } from "@/components/featured-books"
import { ReadingCommunity } from "@/components/reading-community"
import { BookEvents } from "@/components/book-events"
import { ReadingTips } from "@/components/reading-tips"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <FeaturedBooks />
        <ReadingCommunity />
        <BookEvents />
        <ReadingTips />
      </main>
    </div>
  )
}
