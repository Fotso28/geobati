import { PageMotion } from "@/components/motion/PageMotion";

/** Le template est remonté à chaque navigation : les animations de la nouvelle page repartent de zéro. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageMotion>{children}</PageMotion>;
}
