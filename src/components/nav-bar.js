import '../css/nav-bar.css';

export default function navbar() {
    return<nav className="navbar">
            <a href='/' className='homeTitle'>WorkoutBuddie</a>
            <ul>
                <li>
                <a href='/workoutlog'>Workout log</a>
                </li>
                <li>
                <a href='/profile'>Profile</a>
                </li>
                <li>
                <a href='/aboutus'>about us</a>
                </li>
            </ul>
        </nav>
}

