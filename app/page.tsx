import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <h1>Hello Rithu</h1>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}
