import Cards from "./components/Card";

const App = () => {
  const bookData = [
    {
      id: 2,
      date: "MAY 10, 2026 / CLASSIC",
      title: "Urban Echoes",
      description:
        "The rhythmic heartbeat of a city that never sleeps, captured in prose.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      readTime: "12 MIN READ",
    },
    {
      id: 3,
      date: "MAY 08, 2026 / MYSTERY",
      title: "Midnight Key",
      description:
        "One door remains locked in the manor. One girl holds the secret to opening it.",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
      readTime: "6 MIN READ",
    },
    {
      id: 4,
      date: "MAY 05, 2026 / SCI-FI",
      title: "Star Bound",
      description:
        "The final frontier isn't space—it's the human mind's capacity to dream.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      readTime: "10 MIN READ",
    },
    {
      id: 5,
      date: "MAY 01, 2026 / ART",
      title: "Bold Brush",
      description:
        "How modern art redefined the way we see color and emotion in the 21st century.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
      readTime: "15 MIN READ",
    },
    {
      id: 6,
      date: "APRIL 28, 2026 / FANTASY",
      title: "Dragon Heart",
      description:
        "A forgotten legend awakens when a young thief finds a glowing stone.",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
      readTime: "9 MIN READ",
    },
    {
      id: 7,
      date: "APRIL 25, 2026 / HORROR",
      title: "Dark Attic",
      description:
        "Some things are better left forgotten in the dust of the old family home.",
      image:
        "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",
      readTime: "11 MIN READ",
    },
    {
      id: 8,
      date: "APRIL 22, 2026 / HISTORY",
      title: "Lost Empire",
      description:
        "Tracing the rise and sudden fall of the civilizations that built the pyramids.",
      image:
        "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1442558224i/7830113.jpg",
      readTime: "14 MIN READ",
    },
    {
      id: 9,
      date: "APRIL 20, 2026 / TRAVEL",
      title: "Wander Lust",
      description:
        "A guide to the most remote corners of the world for the truly adventurous.",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop",
      readTime: "5 MIN READ",
    },
    {
      id: 10,
      date: "APRIL 18, 2026 / COOKING",
      title: "Wild Spice",
      description:
        "Explore the flavors of the jungle with these 50 exotic recipes.",
      image:
        "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=800&auto=format&fit=crop",
      readTime: "7 MIN READ",
    },
    {
      id: 11,
      date: "APRIL 15, 2026 / PHILOSOPHY",
      title: "Inner Calm",
      description:
        "Finding peace in a world that never stops moving or making noise.",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
      readTime: "6 MIN READ",
    },
    {
      id: 12,
      date: "APRIL 12, 2026 / SELF-HELP",
      title: "Focus Fast",
      description:
        "The ultimate guide to reclaiming your attention span in the digital age.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
      readTime: "4 MIN READ",
    },
    {
      id: 13,
      date: "APRIL 10, 2026 / DYSTOPIAN",
      title: "Neon City",
      description:
        "In a future where light is currency, one man dares to live in the dark.",
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop",
      readTime: "9 MIN READ",
    },
    {
      id: 14,
      date: "APRIL 07, 2026 / NATURE",
      title: "Ocean Blue",
      description:
        "Discovering the giants that roam the deepest parts of our planet's oceans.",
      image:
        "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=800&auto=format&fit=crop",
      readTime: "3 MIN READ",
    },
    {
      id: 15,
      date: "APRIL 05, 2026 / DESIGN",
      title: "Pure Line",
      description:
        "Why minimalism is the most powerful tool in a designer's arsenal.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      readTime: "2 MIN READ",
    },
    {
      id: 16,
      date: "APRIL 02, 2026 / BUSINESS",
      title: "Growth Hack",
      description:
        "The secret strategies used by the world's fastest-growing tech startups.",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop",
      readTime: "13 MIN READ",
    },
    {
      id: 19,
      date: "MARCH 25, 2026 / ARCHIVE",
      title: "Old Ink",
      description:
        "Exploring the world's oldest manuscripts and the secrets they preserve.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop",
      readTime: "12 MIN READ",
    },
    {
      id: 20,
      date: "MARCH 22, 2026 / SCIENCE",
      title: "Quantum Life",
      description:
        "Understanding the bizarre laws of physics that govern our reality.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
      readTime: "4 MIN READ",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-black flex flex-wrap content-center items-center gap-5 p-10">
        {bookData.map((elm, idx) => {
          return (
            <div key={idx}>
              <Cards
                date={elm.date}
                title={elm.title}
                description={elm.description}
                image={elm.image}
                readTime={elm.readTime}
              />
            </div>
          );
        })}
      </div>
      <Cards/>
    </>
  );
};

export default App;
