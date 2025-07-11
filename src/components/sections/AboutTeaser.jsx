import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { containerVariants } from '../../styles/animations';

const AboutTeaser = () => {
  return (
      <motion.section
          className="py-20 px-6 md:px-12 container mx-auto text-center section-card-style"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
      >
        <motion.h2
            className="text-4xl md:text-5xl font-display text-[var(--color-text-primary)] mb-6 lightsaber-underline"
        >
          REGISTRO DE DATOS
        </motion.h2>

        <motion.p
            className="text-lg md:text-xl font-sans text-[var(--color-text-primary)] max-w-4xl mx-auto mb-10 leading-relaxed"
        >
          Soy <strong className="text-[var(--color-accent-jedi-blue)]">Brandon Montealegre</strong>, un desarrollador <span className="text-[var(--color-accent-jedi-green)] font-semibold">Full Stack</span> con pasión por construir experiencias digitales robustas y visualmente impactantes. Fusiono tecnología y diseño para crear soluciones que parecen sacadas del futuro.
        </motion.p>

        <NavLink
            to="/about"
            className="inline-block font-sans font-bold py-3 px-8 border-2 border-[var(--color-accent-jedi-blue)] text-[var(--color-accent-jedi-blue)] rounded-md hover:bg-[var(--color-accent-jedi-blue)] hover:text-[var(--color-background)] transition-all duration-300 shadow-[0_0_15px_var(--color-accent-jedi-blue)] hover:shadow-[0_0_30px_var(--color-accent-jedi-blue)]"
        >
          Saber Más
        </NavLink>
      </motion.section>
  );
};

export default AboutTeaser;
