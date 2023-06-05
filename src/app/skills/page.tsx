import {
  backendSkills,
  databaseSkills,
  frontendSkills,
  mobileSkills,
  otherSkills,
  designSkills,
} from '@/helpers';
import { SkillItem } from '@/components';

export default function Skills() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="text-4xl font-black text-center text-primary md:text-6xl">
          Mis Habilidades
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3 ">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Design</h2>
            <SkillItem skills={designSkills} />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Frontend</h2>
            <SkillItem skills={frontendSkills} />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Backend</h2>
            <SkillItem skills={backendSkills} />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Mobile</h2>
            <SkillItem skills={mobileSkills} />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Base de Datos</h2>
            <SkillItem skills={databaseSkills} />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Otros</h2>
            <SkillItem skills={otherSkills} />
          </div>
        </div>
      </div>
    </div>
  );
}
