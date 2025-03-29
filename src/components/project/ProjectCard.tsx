import React from 'react'
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithubAlt } from 'react-icons/fa';
import styles from './project.module.scss';

type project = {
  type: string;
  name: string;
  url: string;
  github: string;
  image: string;
  description: string;
  stacks: string[];
}

type ProjectCardProps = {
  index: number;
  project: project;
}

export const ProjectCard = ({ index, project }: ProjectCardProps) => {
  return (
    <div key={index} className={styles.projectCard}>
      <div>
        <div className={styles.projectImage}>
          <Link
            href={project.url}
            rel='noopener noreferrer'
            target='_blank'
          >
            <Image
              src={project.image || `/photo-1460925895917-afdab827c52f.jpeg`}
              width={800}
              height={400}
              alt={project.name}
            />
            <div className={styles.projectOverlay}>
              <FiExternalLink size={22} />
            </div>
          </Link>
        </div>
        <div className={styles.projectContent}>
          <h3>{project.name}</h3>
          <p>
            {project.description}
          </p>
        </div>
      </div>

      <div className={styles.tagContainer}>
        <div className={styles.tags}>
          {project.stacks.map((stack, i) => (
            <span key={`${index}-${i}`}>{stack}</span>
          ))}
        </div>
        {project.github && (
          <Link
            className={styles.githubLink}
            href={project.github}
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaGithubAlt size={24} />
          </Link>
        )}
      </div>
    </div>
  )
}