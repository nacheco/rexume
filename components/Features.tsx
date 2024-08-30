import CaptureCard from '@/components/CaptureCard';

const featureData = [
  {
    title: "AI-Powered Resume Creation",
    description: "Our advanced AI analyzes your input and crafts a tailored resume that highlights your strengths and matches job requirements.",
    mediaContent: "https://videos.pexels.com/video-files/9669049/9669049-hd_1920_1080_25fps.mp4",
    isVideo: true,
    backgroundColor: "#1F2125",
    textColor: "#FFF7ED"
  },
  {
    title: "ATS Optimization",
    description: "Ensure your resume passes through Applicant Tracking Systems with our ATS-friendly formatting and keyword optimization.",
    mediaContent: "https://videos.pexels.com/video-files/9669049/9669049-hd_1920_1080_25fps.mp4",
    isVideo: true,
    backgroundColor: "#6A6A6A",
    textColor: "#FFF7ED"
  },
  {
    title: "Customizable Templates",
    description: "Choose from a variety of professional templates that suit your industry and personal style.",
    mediaContent: "https://videos.pexels.com/video-files/9669049/9669049-hd_1920_1080_25fps.mp4",
    isVideo: true,
    backgroundColor: "#E6831A",
    textColor: "#FFF7ED"
  },
  {
    title: "Real-Time Editing",
    description: "Make changes on the fly and see updates in real-time, ensuring your resume is always up-to-date and perfect.",
    mediaContent: "https://videos.pexels.com/video-files/9669049/9669049-hd_1920_1080_25fps.mp4",
    isVideo: true,
    backgroundColor: "#FEDEEC",
    textColor: "#0D1321"
  },
  // Add more feature data as needed
];

const Features: React.FC = () => {
  return (
    <section className="space-y-16 mx-8 lg:mx-36">
      {featureData.map((feature, index) => (
        <div 
          key={index}
          className="sticky top-0"
          style={{
            top: `calc(64px + ${index * 50}px)`
          }}
        >
          <CaptureCard
            title={feature.title}
            description={feature.description}
            mediaContent={feature.mediaContent}
            isVideo={feature.isVideo}
            backgroundColor={feature.backgroundColor}
            textColor={feature.textColor}
          />
        </div>
      ))}
    </section>
  );
};

export default Features;
