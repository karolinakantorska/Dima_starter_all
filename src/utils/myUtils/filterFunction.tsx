import { ProjectsListType, ProjectType, FilterParams } from "../TS/interface"



export function filter(allProjects: ProjectsListType, { phase, services }: FilterParams) {
    /*
    function filterAlter(project: ProjectType) {
        return (objektAlter === 'Alle') ? true : project.objektAlter === objektAlter
    }*/
    function filterPhase(project: ProjectType) {
        return (phase === 'Alle') ? true : project.phase.includes(phase)
    }
    function filterServices(project: ProjectType) {
        return (services === 'Alle') ? true : project.services.includes(services)
    }
    return allProjects.filter(filterServices).filter(filterPhase)
}