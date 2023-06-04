import {
  backendSkills,
  databaseSkills,
  frontendSkills,
  mobileSkills,
  otherSkills,
} from "@/helpers";
import { SkillItem } from "@/components";

export default function Skills() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-800">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-center text-4xl font-black text-primary md:text-6xl">
          Mis Habilidades
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
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
