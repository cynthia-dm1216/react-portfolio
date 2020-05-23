import superhero from '../assets/superheroBB.png';
// import googleBookSearch from '../assets/googleBookSearch.jpg';

const projects = [
    {
        title: 'Superhero B&B',
        description: 'An app that allows superhero fans to view stats on their favorite hero',
        githubUrl: 'https://github.com/cynthia-dm1216/ProjectGroup1',
        imageUrl: superhero,
        deployedUrl: 'https://cynthia-dm1216.github.io/ProjectGroup1/'
    }
]

export default {
    getProjects: function() {
        return new Promise(resolve => {
            resolve(projects);
        });
    }
};