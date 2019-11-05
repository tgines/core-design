/** @jsx jsx */
import { jsx } from '@emotion/core'
import ReactDOM from 'react-dom'
import { space, color, borderRadius } from '@core-ds/primitives'
import * as icons24 from '@core-ds/icons/24'
import * as icons16 from '@core-ds/icons/16'
import { version } from '@core-ds/icons/package'

import './styles.css'

function App() {
  return (
    <div css={{ color: color.black }}>
      <div css={{ maxWidth: 1200, padding: space[4], margin: '0 auto' }}>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'baseline',
            padding: `${space[6]} 0`,
          }}
        >
          <h1 css={{ margin: `0 0 ${space[4]}` }}>
            Core Icons 
            <span css={{ 
                fontWeight: `normal`,
                marginLeft: `${space[4]}`,
                fontSize: 24,
                color: `${color.gray5}`
                }}>
              (v{version})
            </span>
          </h1>
          <ul
            css={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              '& > :not(:last-child)': { marginRight: 16 },
            }}
          >
            <li>
              <Link href="https://github.com/ifixit/core-icons#usage">
                Usage
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ifixit/core-icons">GitHub</Link>
            </li>
            <li>
              <Link href="#">Figma</Link>
            </li>
            <li>
              <Link href="https://www.npmjs.com/@core-ds/icons">npm</Link>
            </li>
          </ul>
        </div>
        <IconGrid title="16px icons" icons={icons16} />
        <IconGrid title="24px icons" icons={icons24} />
      </div>
    </div>
  )
}

function IconGrid({ title, icons }) {
  return (
    <div
      css={{
        marginBottom: space[6],
        padding: space[6],
        backgroundColor: color.gray1,
        borderRadius: borderRadius.lg,
      }}
    >
      <h2 css={{ margin: `0 0 ${space[6]}` }}>{title}</h2>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gridGap: space[5],
        }}
      >
        {Object.entries(icons).map(([name, Icon]) => (
          <div>
            <Icon
              css={{
                marginRight: space[4],
                color: color.gray6,
                verticalAlign: 'text-bottom',
              }}
            />
            <span css={{ 
              color: `${color.gray5}`, 
              fontFamily: `'Roboto Mono', monospace`,
              fontSize: 16
              }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Link(props) {
  return <a target="_blank" css={{ color: color.blue }} {...props} />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
