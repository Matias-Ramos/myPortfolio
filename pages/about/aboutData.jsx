import {
    html,
    css,
    javascript,
    typescript,
    react,
    next,
    golang,
    sql
} from '../../components/icons/icons'

const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Frontend',
                icons: [
                    html,
                    css,
                    javascript,
                    typescript,
                    react,
                    next,
                ],
            },
            {
                title: 'Backend',
                icons: [
                    golang,
                    sql,
                ],
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'Freelance developer',
                stage: '2022 - 2024',
            },
            {
                title: 'Network Analyst - Accenture',
                stage: '2019 - 2021',
            },
            {
                title: 'Asset mgmt. & Local support - Accenture',
                stage: '2017 - 2019',
            },
        ],
    },
];
export default aboutData;