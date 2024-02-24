import Image from "next/image";

const Logo = () => (
  <Image
    style={styles.logo}
    src="/logo.svg"
    alt="Next.js Logo"
    width={400}
    height={100}
    priority
  />
);

const styles = {
  logo: {
    position: "relative" as "relative",
  },
};

export default Logo;
