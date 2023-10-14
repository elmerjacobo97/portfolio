'use client';
import { FC, useEffect, useState } from 'react';
import { CardProject } from '@/components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import projects from '../../data/projects.json';

interface Project {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  technologies: string;
  seeCode: string;
  visiteSite: string;
}

const Projects: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [projectsPerPage] = useState<number>(6);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const indexOfLastProject: number = currentPage * projectsPerPage;
  const indexOfFirstProject: number = indexOfLastProject - projectsPerPage;
  const currentProjects: Project[] = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (action: string | number): void => {
    let newPage = currentPage;
    let shouldScroll = false;

    if (typeof action === 'string') {
      if (action === 'prev' && currentPage > 1) {
        newPage = currentPage - 1;
        shouldScroll = true;
      }
      if (action === 'next' && currentPage < totalPages) {
        newPage = currentPage + 1;
        shouldScroll = true;
      }
    } else {
      newPage = action;
      shouldScroll = currentPage !== newPage;
    }

    if (newPage !== currentPage && shouldScroll) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-800">
      <h1 className="text-4xl font-black text-center md:text-6xl">
        <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
          Últimos Proyectos
        </span>
      </h1>
      <div className="max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 md:grid-cols-3">
          {currentProjects.map((project, index) => (
            <CardProject
              key={index}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              seeCode={project.seeCode}
              visiteSite={project.visiteSite}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10 md:justify-end join">
          <button
            className="join-item btn btn-accent"
            onClick={() => paginate('prev')}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
          </button>
          <button className="join-item btn" disabled>
            <span className="text-gray-400"> Page {currentPage}</span>
          </button>
          <button
            className="join-item btn btn-accent"
            onClick={() => paginate('next')}
            disabled={currentPage === totalPages}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
