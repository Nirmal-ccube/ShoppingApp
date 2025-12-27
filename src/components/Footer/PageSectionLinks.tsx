import { HashLink } from 'react-router-hash-link';

export default function PageSectionLinks() {
    return (
        <div className='flex flex-col space-y-4'>
            <h2 className="pagesectionlinks-title">Page Section Links</h2>

            <div className='pagesectionlinks-list'>
                <HashLink to="#header">Header</HashLink>
                <HashLink to="#caousel">Caousel</HashLink>
            </div>
        </div>
    )
}