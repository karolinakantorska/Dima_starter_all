import type { NextPage } from 'next'
import Link from 'next/link';
import { PATH_PAGE } from 'src/routes/paths';

const LinksCom: NextPage = () => {
  const paths = Object.entries(PATH_PAGE);
  return (
    <>
      <p>Links:</p>
      {paths.map((path) => (
        <Link href={`/${path[1]}`}>
          <div>
            <a>{`${path[0]}`}</a>
          </div>
        </Link>
      )
      )}

    </>)
}
export default LinksCom;
