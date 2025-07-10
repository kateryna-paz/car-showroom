import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

function DetailsButton({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        ${className}
        cursor-none flex justify-center mt-auto
        bg-transparent 
        text-white 
        shadow-[0_0_30px_rgba(270,160,30,0.7)] 
        hover:text-orange-300
        hover:shadow-[0_0_30px_rgba(270,160,30,0.4)]
        py-3 pl-10 pr-8 
        rounded-xl

        md:rounded-xl 
        md:relative md:bottom-auto 
        md:left-auto 

        gap-2 items-center font-montagu-slab font-semibold
        transition-all duration-500 ease-in-out
      `}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
    >
      <span>Детальніше</span>
      <motion.div
        className="flex items-center"
        whileHover={{ x: 5 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.3,
        }}
      >
        <IoIosArrowForward className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
}

export default DetailsButton;
