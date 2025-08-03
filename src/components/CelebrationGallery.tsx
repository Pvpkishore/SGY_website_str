import { useState } from "react";
import { Button } from "@/components/ui/button";
import festivalImage41 from "@/assets/Vinayakachavathi2023/1695060893505.jpg";
import festivalImage42 from "@/assets/Vinayakachavathi2023/1695061010009.jpg";
// import festivalImage43 from "@/assets/Vinayakachavathi2023/Snapchat-1694781732.jpg";
import festivalImage1 from "@/assets/Vinayakachavathi2023/Snapchat-1268370118.jpg";
import festivalImage2 from "@/assets/Vinayakachavathi2023/Snapchat-1293197734.jpg";
import festivalImage3 from "@/assets/Vinayakachavathi2023/Snapchat-1658735886.jpg";
import festivalImage4 from "@/assets/Vinayakachavathi2023/Snapchat-1694781732.jpg";
import festivalImage5 from "@/assets/Vinayakachavathi2023/Snapchat-1832258835.jpg";
import festivalImage6 from "@/assets/Vinayakachavathi2023/Snapchat-2044952979.jpg";
import festivalImage7 from "@/assets/Vinayakachavathi2023/1695061138541.jpg";
import festivalImage8 from "@/assets/Vinayakachavathi2023/IMG_20230920_145628.jpg";
import festivalImage9 from "@/assets/Vinayakachavathi2023/IMG_20230920_145630.jpg";
import festivalImage10 from "@/assets/Vinayakachavathi2023/IMG_20230920_153804.jpg";
import festivalImage11 from "@/assets/Vinayakachavathi2023/IMG_20230920_153807.jpg";
import festivalImage12 from "@/assets/Vinayakachavathi2023/IMG_20230920_153815.jpg";
import festivalImage13 from "@/assets/Vinayakachavathi2023/IMG_20230920_153822.jpg";
import festivalImage14 from "@/assets/Vinayakachavathi2023/IMG_20230920_153823.jpg";
import festivalImage15 from "@/assets/Vinayakachavathi2023/IMG_20230920_153843.jpg";
import festivalImage16 from "@/assets/Vinayakachavathi2023/IMG_20230920_153844.jpg";
import festivalImage17 from "@/assets/Vinayakachavathi2023/IMG_20230920_154210.jpg";
import festivalImage18 from "@/assets/Vinayakachavathi2023/IMG_20230920_154212.jpg";
import festivalImage19 from "@/assets/Vinayakachavathi2023/IMG_20230920_154221.jpg";
import festivalImage20 from "@/assets/Vinayakachavathi2023/IMG_20230920_154225_1.jpg";
import festivalImage21 from "@/assets/Vinayakachavathi2023/IMG_20230920_154225.jpg";
import festivalImage22 from "@/assets/Vinayakachavathi2023/IMG_20230920_160711.jpg";
import festivalImage23 from "@/assets/Vinayakachavathi2023/IMG_20230920_160712.jpg";
import festivalImage24 from "@/assets/Vinayakachavathi2023/IMG_20230920_160713.jpg";
import festivalImage25 from "@/assets/Vinayakachavathi2023/IMG_20230920_160720.jpg";
import festivalImage26 from "@/assets/Vinayakachavathi2023/IMG_20230920_160735.jpg";
import festivalImage27 from "@/assets/Vinayakachavathi2023/IMG_20230920_160736.jpg";
import festivalImage28 from "@/assets/Vinayakachavathi2023/IMG_20230920_161847.jpg";
import festivalImage29 from "@/assets/Vinayakachavathi2023/IMG_20230920_161848.jpg";
import festivalImage30 from "@/assets/Vinayakachavathi2023/IMG_20230920_161933.jpg";
import festivalImage31 from "@/assets/Vinayakachavathi2023/IMG_20230920_161934.jpg";
import festivalImage32 from "@/assets/Vinayakachavathi2023/IMG_20230920_161942.jpg";
import festivalImage33 from "@/assets/Vinayakachavathi2023/IMG_20230920_161944.jpg";
import festivalImage34 from "@/assets/Vinayakachavathi2023/IMG_20230920_165125.jpg";
import festivalImage35 from "@/assets/Vinayakachavathi2023/IMG_20230920_165129.jpg";
import festivalImage36 from "@/assets/Vinayakachavathi2023/IMG_20230920_165311.jpg";
import festivalImage37 from "@/assets/Vinayakachavathi2023/IMG_20230920_165312.jpg";
import festivalImage38 from "@/assets/Vinayakachavathi2023/Snapchat-2032202094.jpg";
import festivalImage39 from "@/assets/Vinayakachavathi2023/Snapchat-446451376.jpg";
import festivalImage40 from "@/assets/Vinayakachavathi2023/Snapchat-1214937848.jpg";
// import festivalImage44 from "@/assets/Vinayakachavathi2024/20240907_093156.jpg";
// import festivalImage45 from "@/assets/Vinayakachavathi2024/20240907_111056.jpg";
import festivalImage46 from "@/assets/Vinayakachavathi2024/20240907_111101.jpg";
import festivalImage47 from "@/assets/Vinayakachavathi2024/20240907_111104.jpg";
import festivalImage48 from "@/assets/Vinayakachavathi2024/20240907_111123.jpg";
import festivalImage49 from "@/assets/Vinayakachavathi2024/20240907_111138.jpg";
import festivalImage50 from "@/assets/Vinayakachavathi2024/20240907_111440.jpg";
import festivalImage51 from "@/assets/Vinayakachavathi2024/20240907_111452.jpg";
import festivalImage52 from "@/assets/Vinayakachavathi2024/20240907_111745.jpg";
import festivalImage53 from "@/assets/Vinayakachavathi2024/20240907_111747.jpg";
import festivalImage54 from "@/assets/Vinayakachavathi2024/20240907_112149.jpg";
import festivalImage55 from "@/assets/Vinayakachavathi2024/20240907_112707.jpg";
import festivalImage56 from "@/assets/Vinayakachavathi2024/20240907_185637.jpg";
import festivalImage57 from "@/assets/Vinayakachavathi2024/20240909_144703.jpg";
import festivalImage58 from "@/assets/Vinayakachavathi2024/20240909_144708.jpg";
import festivalImage59 from "@/assets/Vinayakachavathi2024/20240909_144709.jpg";
import festivalImage60 from "@/assets/Vinayakachavathi2024/20240909_144819.jpg";
import festivalImage61 from "@/assets/Vinayakachavathi2024/20240909_144822.jpg";
import festivalImage62 from "@/assets/Vinayakachavathi2024/20240909_145010.jpg";
import festivalImage63 from "@/assets/Vinayakachavathi2024/20240909_145012.jpg";
import festivalImage64 from "@/assets/Vinayakachavathi2024/20240909_145817.jpg";
import festivalImage65 from "@/assets/Vinayakachavathi2024/20240909_145819.jpg";
import festivalImage66 from "@/assets/Vinayakachavathi2024/20240909_145828.jpg";
import festivalImage67 from "@/assets/Vinayakachavathi2024/20240909_145830.jpg";
import festivalImage68 from "@/assets/Vinayakachavathi2024/20240909_145859.jpg";
import festivalImage69 from "@/assets/Vinayakachavathi2024/1753940142469.jpg";
import festivalImage70 from "@/assets/Vinayakachavathi2024/1753940145033.png";
import vc23 from "../assets/Vinayakachavathi2023/vc2023.mp4";


import { ChevronDown, ChevronUp, Play, Image as ImageIcon } from "lucide-react";

const CelebrationGallery = () => {
  const [activeYear, setActiveYear] = useState("2024");
  const [showAllImages, setShowAllImages] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const galleryData = {
    "2023": {
      title: "Vinayaka Chavithi 2023 – The Beginning of a Legacy",
      subtitle: "The first grand celebration since our formation",
      images: [
        { src: festivalImage41, alt: "2023 Idol Installation", caption: "Grand idol installation ceremony" },
        { src: festivalImage42, alt: "2023 Community Pooja", caption: "Community prayers and offerings" },
        // { src: festivalImage43, alt: "2023 Cultural Events", caption: "Traditional cultural performances" },
        { src: festivalImage1, alt: "2023 Visarjan", caption: "Peaceful visarjan procession" },
        { src: festivalImage2, alt: "2023 Decoration", caption: "Beautiful pandal decorations" },
        { src: festivalImage3, alt: "2023 Youth Team", caption: "Our dedicated youth team" },
        { src: festivalImage4, alt: "2023 Evening Aarti", caption: "Evening prayer ceremony" },
        { src: festivalImage5, alt: "2023 Community Gathering", caption: "Village community together" },
        { src: festivalImage6, alt: "2023 Ganesh Idol", caption: "Blessed Ganesh murti" },
        { src: festivalImage7, alt: "2023 Cultural Event", caption: "Cultural programs and dances" },
        { src: festivalImage8, alt: "2023 Youth Volunteers", caption: "Hardworking volunteers" },
        { src: festivalImage9, alt: "2023 Aarti", caption: "Devotees performing Aarti" },
        { src: festivalImage10, alt: "2023 Crowd", caption: "Crowd gathered for blessings" },
        { src: festivalImage11, alt: "2023 Pooja Setup", caption: "Traditional pooja arrangements" },
        { src: festivalImage12, alt: "2023 Decor Lights", caption: "Sparkling lights around" },
        { src: festivalImage13, alt: "2023 Ganesh Mandap", caption: "Divine Ganesh mandap setup" },
        { src: festivalImage14, alt: "2023 Offerings", caption: "Devotees offering prayers" },
        { src: festivalImage15, alt: "2023 Crowd Blessings", caption: "Faithful gathered to pray" },
        { src: festivalImage16, alt: "2023 Kids Group", caption: "Kids enjoying festivities" },
        { src: festivalImage17, alt: "2023 Celebrations", caption: "Joyful celebration moments" },
        { src: festivalImage18, alt: "2023 Rituals", caption: "Sacred rituals in progress" },
        { src: festivalImage19, alt: "2023 Drum Beats", caption: "Rhythmic drum beats" },
        { src: festivalImage20, alt: "2023 Devotees", caption: "United in devotion" },
        { src: festivalImage21, alt: "2023 Tradition", caption: "Carrying tradition forward" },
        { src: festivalImage22, alt: "2023 Prayers", caption: "Silent moments of prayer" },
        { src: festivalImage23, alt: "2023 Smiles", caption: "Smiles all around" },
        { src: festivalImage24, alt: "2023 Evening Lights", caption: "Evenings filled with light" },
        { src: festivalImage25, alt: "2023 Group Photo", caption: "Memorable group moments" },
        { src: festivalImage26, alt: "2023 Food", caption: "Festive prasadam distribution" },
        { src: festivalImage27, alt: "2023 Entrance", caption: "Welcoming entrance arch" },
        { src: festivalImage28, alt: "2023 Unity", caption: "Unity in celebration" },
        { src: festivalImage29, alt: "2023 Decorations", caption: "Creative decoration ideas" },
        { src: festivalImage30, alt: "2023 Team Coordination", caption: "Perfect coordination" },
        { src: festivalImage31, alt: "2023 Light Show", caption: "Dazzling lights at night" },
        { src: festivalImage32, alt: "2023 Cultural Stage", caption: "Performances on stage" },
        { src: festivalImage33, alt: "2023 Mandap View", caption: "Mandap from top view" },
        { src: festivalImage34, alt: "2023 Youth Bonding", caption: "Together as a team" },
        { src: festivalImage35, alt: "2023 Prayers and Songs", caption: "Bhajans echoing in air" },
        { src: festivalImage36, alt: "2023 Side View", caption: "Side glimpse of setup" },
        { src: festivalImage37, alt: "2023 Preparation", caption: "Before the big event" },
        // { src: festivalImage38, alt: "2023 Final Day", caption: "Closing day emotions" },
        { src: festivalImage39, alt: "2023 Immersion", caption: "Ganesh immersion celebration" },
        { src: festivalImage40, alt: "2023 Togetherness", caption: "Together, we celebrate" },
      ],
      videos: [
        { src: vc23 , title: "Uploaded soon...", duration: "0:33", thumbnail: festivalImage4 },
      ],
      highlights: [
        "First official celebration as Swagath Ganesha Youth Association",
        "100+ community members participated",
        "Eco-friendly clay idol installation",
        "Traditional bhajans and cultural programs"
      ]
    },
    "2024": {
      title: "Vinayaka Chavithi 2024 – Bigger, Brighter, Blissful",
      subtitle: "More joy, more people, more devotion",
      images: [
        // { src: festivalImage44, alt: "2024 Grand Setup", caption: "Magnificent pandal decoration" },
        // { src: festivalImage45, alt: "2024 Night Lighting", caption: "Beautiful evening illumination" },
        { src: festivalImage46, alt: "2024 Youth Participation", caption: "Active youth involvement" },
        { src: festivalImage47, alt: "2024 Community Feast", caption: "Grand community prasadam" },
        { src: festivalImage48, alt: "2024 Cultural Dance", caption: "Traditional dance performances" },
        { src: festivalImage49, alt: "2024 Bhajan Night", caption: "Devotional music evening" },
        { src: festivalImage50, alt: "2024 Competition", caption: "Youth cultural competitions" },
        { src: festivalImage51, alt: "2024 Final Prayers", caption: "Final day prayers and blessings" },
        { src: festivalImage52, alt: "2024 Drone View", caption: "Aerial view of celebration" },
        { src: festivalImage53, alt: "2024 Unity", caption: "Community unity and joy" },
        { src: festivalImage54, alt: "2024 Eco-Friendly Decor", caption: "Sustainable decoration efforts" },
        { src: festivalImage55, alt: "2024 Idol Immersion", caption: "Visarjan with devotion" },
        { src: festivalImage56, alt: "2024 Volunteer Team", caption: "Dedicated volunteer group" },
        { src: festivalImage57, alt: "2024 Crowd Moments", caption: "Vibrant crowd celebrations" },
        { src: festivalImage58, alt: "2024 Traditions", caption: "Following cultural traditions" },
        { src: festivalImage59, alt: "2024 Family Time", caption: "Families celebrating together" },
        { src: festivalImage60, alt: "2024 Art Showcase", caption: "Creative artwork and rangolis" },
        { src: festivalImage61, alt: "2024 Kids Fun", caption: "Children enjoying the event" },
        { src: festivalImage62, alt: "2024 Aarti Time", caption: "Evening aarti moments" },
        { src: festivalImage63, alt: "2024 Blessings", caption: "Devotees receiving blessings" },
        { src: festivalImage64, alt: "2024 Spiritual Vibes", caption: "Peaceful and divine atmosphere" },
        { src: festivalImage65, alt: "2024 Food Distribution", caption: "Offering prasadam to all" },
        { src: festivalImage66, alt: "2024 Smiling Faces", caption: "Joyful expressions everywhere" },
        { src: festivalImage67, alt: "2024 Stage Events", caption: "Performances on the main stage" },
        { src: festivalImage68, alt: "2024 Decorations Close-Up", caption: "Intricate decor elements" },
        { src: festivalImage69, alt: "2024 Color Splash", caption: "Vibrant festival colors" },
      ],
      videos: [
        { src: "/assets/Vinayakachavathi2024/20240904_112640.mp4", title: "Uploaded soon...", duration: "00:00" },
        // { src: "/assets/Vinayakachavathi2024/20240904_160535.mp4", title: "Ganapati Decoration Work", duration: "3:45" },
        // { src: "/assets/Vinayakachavathi2024/20240904_164107.mp4", title: "Volunteer Coordination", duration: "2:12" },
        // { src: "/assets/Vinayakachavathi2024/20240906_160137.mp4", title: "Stage Setup Scenes", duration: "4:35" },
        // { src: "/assets/Vinayakachavathi2024/20240906_171331.mp4", title: "Welcoming Guests", duration: "1:50" },
        // { src: "/assets/Vinayakachavathi2024/20240906_172107.mp4", title: "Youth Gathering", duration: "3:25" },
        // { src: "/assets/Vinayakachavathi2024/20240906_172802.mp4", title: "Cultural Performances", duration: "5:10" },
        // { src: "/assets/Vinayakachavathi2024/20240906_173418.mp4", title: "Dance Performances", duration: "4:28" },
        // { src: "/assets/Vinayakachavathi2024/20240906_174019.mp4", title: "Decor Light Check", duration: "2:58" },
        // { src: "/assets/Vinayakachavathi2024/20240906_174150.mp4", title: "Aarti Preparation", duration: "3:12" },
        // { src: "/assets/Vinayakachavathi2024/20240906_174236.mp4", title: "Evening Bhajan", duration: "6:14" },
        // { src: "/assets/Vinayakachavathi2024/20240907_112157.mp4", title: "Morning Festivities", duration: "2:45" },
        // { src: "/assets/Vinayakachavathi2024/20240907_174125.mp4", title: "Crowd Gathering", duration: "3:55" },
        // { src: "/assets/Vinayakachavathi2024/20240907_174413.mp4", title: "Dance Highlights", duration: "4:20" },
        // { src: "/assets/Vinayakachavathi2024/20240907_195733.mp4", title: "Cultural Night", duration: "5:40" },
        // { src: "/assets/Vinayakachavathi2024/20240908_000841.mp4", title: "Late Night Aarti", duration: "4:10" },
        // { src: "/assets/Vinayakachavathi2024/20240908_215418.mp4", title: "Final Day Crowd", duration: "3:30" },
        // { src: "/assets/Vinayakachavathi2024/20240908_215947.mp4", title: "Closing Speeches", duration: "2:50" },
        // { src: "/assets/Vinayakachavathi2024/20240908_220017.mp4", title: "Aarti and Blessings", duration: "3:44" },
        // { src: "/assets/Vinayakachavathi2024/20240909_084824.mp4", title: "Visarjan Start", duration: "5:55" },
        // { src: "/assets/Vinayakachavathi2024/20240909_084839.mp4", title: "Procession Moments", duration: "4:00" },
        // { src: "/assets/Vinayakachavathi2024/20240909_085042.mp4", title: "Dhol Tasha Beats", duration: "3:20" },
        // { src: "/assets/Vinayakachavathi2024/20240909_085059.mp4", title: "Final Blessings", duration: "2:40" },
        // { src: "/assets/Vinayakachavathi2024/20240909_085103.mp4", title: "Idol Immersion", duration: "6:02" },
        // { src: "/assets/Vinayakachavathi2024/20240909_141814.mp4", title: "Cleanup and Thanks", duration: "2:55" },
        // { src: "/assets/Vinayakachavathi2024/20240909_144451.mp4", title: "Behind the Scenes", duration: "3:18" },
        // { src: "/assets/Vinayakachavathi2024/20240909_145015.mp4", title: "Farewell Moments", duration: "4:05" },
        // { src: "/assets/Vinayakachavathi2024/20240909_145330.mp4", title: "Closing Ceremony", duration: "3:33" }
      ],
      highlights: [
        "200+ devotees joined the celebration",
        "Enhanced decorations with LED lighting",
        "Cultural competitions for youth",
        "Extended 5-day celebration period"
      ]
    },
    "2025": {
      title: "Vinayaka Chavithi 2025 – Bigger, Brighter, Blissful",
      subtitle: "More joy, more people, more devotion – స్వాగత గణేశ యూత్ అసోసియేషన్ 2025 వినాయక చవితి ఉత్సవాలకు గ్రామ ప్రజలను ఆహ్వానిస్తుంది.",
      images: [
        { src: festivalImage69, alt: "2024 Grand Setup", caption: "Magnificent pandal decoration" },
        { src: festivalImage70, alt: "2024 Night Lighting", caption: "Beautiful evening illumination" },
      ],
      videos: [
        { src: "/assets/Vinayakachavathi2024/20240904_112640.mp4", title: "Uploaded soon...", duration: "00:00" },
      ],
      highlights: [
        "Coming soon! 🎉",
      ]
    }
  };

  const currentData = galleryData[activeYear as keyof typeof galleryData];
  const imagesToShow = showAllImages ? currentData.images : currentData.images.slice(0, 3);
  const videosToShow = showAllVideos ? currentData.videos : currentData.videos.slice(0, 2);

  return (
    <section className="py-20 px-4 gradient-blessing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-festival font-bold text-gradient mb-6">
            Celebration Gallery
          </h2>
          <p className="text-xl font-elegant text-muted-foreground mb-8">
            Journey through our magnificent celebrations
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Year Toggle */}
        <div className="flex justify-center mb-12 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card rounded-2xl p-2 shadow-blessing border border-secondary">
            {Object.keys(galleryData).map((year) => (
              <Button
                key={year}
                variant={activeYear === year ? "festival" : "ghost"}
                onClick={() => setActiveYear(year)}
                className="mx-1 px-8 py-3 font-festival text-lg rounded-xl"
              >
                {year}
              </Button>
            ))}
          </div>
        </div>

        {/* Year Content */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-festival font-bold text-primary mb-4">
              {currentData.title}
            </h3>
            <p className="text-xl font-elegant text-muted-foreground italic">
              {currentData.subtitle}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-festival text-2xl font-semibold text-primary flex items-center gap-2">
                <ImageIcon className="w-6 h-6" />
                Photo Gallery
              </h4>
              {currentData.images.length > 4 && (
                <Button
                  variant="outline"
                  onClick={() => setShowAllImages(!showAllImages)}
                  className="font-festival hover:scale-105 transition-transform duration-300"
                >
                  {showAllImages ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Show More ({currentData.images.length - 4} more)
                    </>
                  )}
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imagesToShow.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-blessing hover:shadow-divine transition-all duration-500 animate-scale-in hover:scale-105 hover:-rotate-1 cursor-pointer"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                  {/* Floating particles on hover */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-festival text-lg font-semibold leading-tight drop-shadow-lg">
                      {image.caption}
                    </p>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm rounded-full px-4 py-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <span className="font-festival text-sm font-semibold text-secondary-foreground">{activeYear}</span>
                  </div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Gallery */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-festival text-2xl font-semibold text-primary flex items-center gap-2">
                <Play className="w-6 h-6" />
                Video Gallery
              </h4>
              {currentData.videos.length > 2 && (
                <Button
                  variant="outline"
                  onClick={() => setShowAllVideos(!showAllVideos)}
                  className="font-festival hover:scale-105 transition-transform duration-300"
                >
                  {showAllVideos ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Show More ({currentData.videos.length - 2} more)
                    </>
                  )}
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {videosToShow.map((video, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-blessing hover:shadow-divine transition-all duration-500 animate-scale-in hover:scale-105 cursor-pointer bg-gradient-to-br from-primary/10 to-secondary/10"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {/* Actual playable video */}
                  <video
                    controls
                    className="w-full h-48 object-cover rounded-t-3xl bg-black"
                    poster={video.thumbnail || ""} // optional: add thumbnail if you have one
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* <video
                    controls
                    className="w-full aspect-[3/4] object-fit rounded-t-3xl bg-black"
                    poster={video.thumbnail || ""}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}


                  {/* Video info */}
                  <div className="p-6 bg-white/5 backdrop-blur-sm">
                    <h5 className="font-festival text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {video.title}
                    </h5>
                    <div className="flex items-center justify-between">
                      <span className="font-elegant text-sm text-muted-foreground">
                        Duration: {video.duration}
                      </span>
                      <div className="bg-secondary/20 rounded-full px-3 py-1">
                        <span className="font-festival text-xs font-semibold text-secondary">
                          {activeYear}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effects (optional) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>

          </div>

          {/* Highlights */}
          <div className="bg-card rounded-2xl p-8 shadow-blessing border border-secondary">
            <h4 className="font-festival text-2xl font-semibold text-primary mb-6 text-center">
              ✨ Celebration Highlights
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {currentData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-up"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 animate-glow"></div>
                  <p className="font-elegant text-foreground/80">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-2 border-secondary/30 rounded-3xl p-12 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-secondary rounded-full animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>

            <div className="text-6xl mb-6 animate-bounce">📸</div>
            <h4 className="font-festival text-2xl font-semibold text-primary mb-4">
              Share Your Memories
            </h4>
            <p className="font-elegant text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
              Have photos or videos from our celebrations? We'd love to add them to our gallery!
            </p>
            <Button className="font-festival text-lg px-8 py-3 rounded-2xl hover:scale-105 transition-transform duration-300">
              Contact Us to Share
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrationGallery;