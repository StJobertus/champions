import './Teams.scss';
import Message from '../Message.jsx';
import teams from '../../service/teams.js';
import lang from '../../service/lang.js';
/* eslint-disable no-unused-vars */
import m from 'mithril';
/* eslint-enable no-unused-vars */

const tab = {
    id: 'teams',
    icon: 'cog',
    title: 'teams',
};

const menu = {
    header:{
        title: 'teams',
        icon: 'users',
    },
    options:[
        {
            title: 'build',
            icon: 'cog',
            onclick: () => true,
        },
        {
            header: true,
            title: 'champions',
        },
        {
            title: '1★',
            selected: ({ stars }) => stars[ 1 ],
            onclick: () => {
                teams.stars[ 1 ] = !teams.stars[ 1 ];
            },
            split: 5,
        },
        {
            title: '2★',
            selected: ({ stars }) => stars[ 2 ],
            onclick: () => {
                teams.stars[ 2 ] = !teams.stars[ 2 ];
            },
            split: 5,
        },
        {
            title: '3★',
            selected: ({ stars }) => stars[ 3 ],
            onclick: () => {
                teams.stars[ 3 ] = !teams.stars[ 3 ];
            },
            split: 5,
        },
        {
            title: '4★',
            selected: ({ stars }) => stars[ 4 ],
            onclick: () => {
                teams.stars[ 4 ] = !teams.stars[ 4 ];
            },
            split: 5,
        },
        {
            title: '5★',
            selected: ({ stars }) => stars[ 5 ],
            onclick: () => {
                teams.stars[ 5 ] = !teams.stars[ 5 ];
            },
            split: 5,
        },
        {
            header: true,
            title: 'team-size',
        },
        {
            title: '1',
            selected: ({ size }) => size === 1,
            onclick: () => {
                teams.size = 1;
            },
            split: 3,
        },
        {
            title: '2',
            selected: ({ size }) => size === 2,
            onclick: () => {
                teams.size = 2;
            },
            split: 3,
        },
        {
            title: '3',
            selected: ({ size }) => size === 3,
            onclick: () => {
                teams.size = 3;
            },
            split: 3,
        },
        {
            header: true,
            title: 'type',
        },
        {
            title: 'algorithm-quest-name',
            selected: ({ type }) => type === 'quest',
            onclick: () => {
                teams.type = 'quest';
            },
            split: 2,
        },
        {
            title: 'algorithm-arena-name',
            selected: ({ type }) => type === 'arena',
            onclick: () => {
                teams.type = 'arena';
            },
            split: 2,
        },
    ],
};

const Teams = {
    view(/* ctrl, args */) {

        return (
            <div class="teams">
                <Message value={ `${ 0 } ${ lang.get('teams') }` } />
                <div class="clear"></div>
            </div>
        );
    },
};

export { tab, menu };
export default Teams;
