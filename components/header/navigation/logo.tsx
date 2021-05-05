import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="#">
            <a>
                <Image src="/images/logo.png" alt="IsSevenAPI logo" width={128} height={48} />
            </a>
        </Link>
    );
}
