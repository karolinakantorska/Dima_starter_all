import { ProjectsListType, ProjectType, FilterParams, Phase, Regionen } from "../TS/interface"

export function filter(allProjects: ProjectsListType, { param }: { param: Phase | Regionen }) {
    if (param !== 'Alle') {
        switch (param) {
            case "Entwicklung":
            case "Plannung":
            case "Realisierung":
                console.log('param ', param, 'bin in phase')
                return allProjects.filter((project) => project.phase.includes(param));
            case "Glarus":
            case "Zürich":
            case "Arosa":
            case "Andere Regionen":
                console.log('param ', param, 'region')
                return allProjects.filter((project) => project.region.includes(param));
            default:
                return allProjects;
        }
    } else {
        return allProjects;
    }
}
export function filter2(allProjects: ProjectsListType, { param }: { param: Phase | Regionen }) {
    if (param === 'Alle') {
        return allProjects;
    }
    if (param === "Entwicklung" || "Plannung" || "Realisierung") {
        console.log('param: ', param)
        return allProjects.filter((project) => project.phase.includes(param));
    }
    if (param === "Glarus" || "Zürich" || "Arosa" || "Andere Regionen") {
        console.log('param: ', param)
        //return allProjects;
        return allProjects.filter((project) => project.region.includes(param));
    }
}
export function filterMany(allProjects: ProjectsListType, { phase, region }: FilterParams) {
    /*
    function filterAlter(project: ProjectType) {
        return (objektAlter === 'Alle') ? true : project.objektAlter === objektAlter
    }*/
    function filterPhase(project: ProjectType) {
        return (phase === 'Alle') ? true : project.phase.includes(phase)
    }
    function filterServices(project: ProjectType) {
        return (region === 'Alle') ? true : project.region.includes(region)
    }
    return allProjects.filter(filterServices).filter(filterPhase)
}