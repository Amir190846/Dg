import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Featured from '@/components/Featured';
import Menu from '@/components/Menu';
import Reservation from '@/components/Reservation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Story />
      <Featured />
      <Menu />
      <Reservation />
    </div>
  );
}
