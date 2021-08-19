import Navigation from './header/navigation';
import Welcome from './header/welcome';
import HeaderDecoration from './header/headerDecoration';

export default function Header() {
    return (
        <header>
            <Navigation />
            <Welcome />
            <HeaderDecoration />
        </header>
    );
}
