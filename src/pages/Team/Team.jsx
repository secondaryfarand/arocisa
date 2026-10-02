import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './Team.module.css';

// Data 5 Anggota Tim (Dengan Tempat Luas Untuk Nama Panjang)
const teamMembers = [
  {
    id: 1,
    name: 'Ni Putu Saivira Claresta Dewani',
    role: 'Lead Researcher & Formulator',
    bio: 'Overseeing the active compound extraction and formulation accuracy of AROCISA natural aromatherapy inhaler.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    socials: {
      linkedin: '#',
      email: 'mailto:researcher1@example.com',
      instagram: '#'
    }
  },
  {
    id: 2,
    name: 'Cokorda Istri Diah Yudiarini',
    role: 'Botanical Extraction Specialist',
    bio: 'Specializing in lipid-based maceration processes and optimization of Clove, Cinnamon, and Sappan Wood extract ratios.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    socials: {
      linkedin: '#',
      email: 'mailto:researcher2@example.com',
      instagram: '#'
    }
  },
  {
    id: 3,
    name: 'Ni Made Filia Lovely Anande',
    role: 'Quality Assurance & Phytochemistry',
    bio: 'Conducting compound stability tests and verifying organoleptic quality metrics for optimal inhalation safety.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    socials: {
      linkedin: '#',
      email: 'mailto:researcher3@example.com',
      instagram: '#'
    }
  },
  {
    id: 4,
    name: 'Ni Komang Nadine Ratna Putri',
    role: 'Product Design & Packaging Engineer',
    bio: 'Designing eco-friendly inhaler casing mechanics, wick preservation sealing, and user-centric ergonomics.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    socials: {
      linkedin: '#',
      email: 'mailto:researcher4@example.com',
      instagram: '#'
    }
  },
  {
    id: 5,
    name: 'Ni Putu Oniuershya Suma Lastari',
    role: 'Documentation & Public Relations',
    bio: 'Managing research data synthesis, academic publications, and public outreach for the AROCISA project.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    socials: {
      linkedin: '#',
      email: 'mailto:researcher5@example.com',
      instagram: '#'
    }
  }
];

// Core Values (Elemen Inovasi Tambahan)
const teamValues = [
  {
    icon: 'fa-flask-vial',
    title: 'Scientific Rigor',
    desc: 'Every formulation ratio is backed by meticulous extraction protocols and literature references.'
  },
  {
    icon: 'fa-leaf',
    title: '100% Natural Integrity',
    desc: 'Committed to using pure botanical resources without synthetic additives or artificial fragrances.'
  },
  {
    icon: 'fa-people-group',
    title: 'Collaborative Synergy',
    desc: 'Fusing multidisciplinary insights to bridge traditional herbal heritage with modern healthcare innovation.'
  }
];

const TeamPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* Header Title Section */}
        <section className={styles.headerSection}>
          <motion.div 
            className={styles.headerContainer}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <span className={styles.badge}>Our Multidisciplinary Team</span> */}
            <h1 className={styles.pageTitle}>Meet the Minds Behind AROCISA</h1>
            <p className={styles.pageSubtitle}>
              A dedicated team of passionate researchers, herbal extraction specialists, and product innovators uniting science and nature.
            </p>
          </motion.div>
        </section>

        {/* Landscape Team Photo Section */}
        <section className={styles.heroImageSection}>
          <div className={styles.heroImageContainer}>
            <motion.div 
              className={styles.landscapeCard}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="/assets/gasyor.jpeg" 
                alt="AROCISA Research Team Working Together" 
                className={styles.landscapeImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayTag}>
                  <i className="fa-solid fa-microscope"></i>
                  <span>GASYOR</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Bar */}
            {/* <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>5</span>
                <span className={styles.statLabel}>Core Researchers</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Botanical Ingredients</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Lipid-Based Extract</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* Team Story & Description */}
        {/* <section className={styles.descriptionSection}>
          <div className={styles.descriptionContainer}>
            <div className={styles.descQuoteBlock}>
              <i className="fa-solid fa-quote-left quoteIcon"></i>
              <p className={styles.descText}>
                "Our mission with AROCISA is to deliver a convenient, effective, and completely natural aromatherapy solution. By combining Clove, Cinnamon, and Sappan Wood, our multidisciplinary team has successfully harmonized traditional herbal remedies with precise modern extraction techniques."
              </p>
            </div>
          </div>
        </section> */}

        {/* 5 Team Members Grid */}
        <section className={styles.membersSection}>
          <div className={styles.sectionHeader}>
            <h2>Team Members</h2>
            <div className={styles.sectionLine}></div>
          </div>

          <div className={styles.membersGrid}>
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id} 
                className={styles.memberCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.cardHeader}>
                  {/* <div className={styles.avatarWrapper}>
                    <img src={member.avatar} alt={member.name} className={styles.avatarImage} />
                  </div> */}
                  {/* <span className={styles.roleBadge}>{member.role}</span> */}
                </div>

                <div className={styles.cardContent}>
                  {/* Container Nama Panjang dengan Spasi yang Lega */}
                  <h3 className={styles.memberName}>{member.name}</h3>
                  {/* <p className={styles.memberBio}>{member.bio}</p> */}

                  {/* <div className={styles.socialLinks}>
                    <a href={member.socials.linkedin} className={styles.socialIcon} aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href={member.socials.email} className={styles.socialIcon} aria-label="Email">
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href={member.socials.instagram} className={styles.socialIcon} aria-label="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Innovation Element: Team Core Values */}
        {/* <section className={styles.valuesSection}>
          <div className={styles.valuesContainer}>
            <div className={styles.valuesHeader}>
              <h2>Our Core Values</h2>
              <p>Principles that guide our formulation journey and research ethics.</p>
            </div>

            <div className={styles.valuesGrid}>
              {teamValues.map((val, i) => (
                <div key={i} className={styles.valueCard}>
                  <div className={styles.valueIconBox}>
                    <i className={`fa-solid ${val.icon}`}></i>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;