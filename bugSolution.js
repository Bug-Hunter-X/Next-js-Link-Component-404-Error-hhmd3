```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```

```javascript
// pages/index.js

export default function Home() {
  return <div>Home Page</div>;
}

// pages/about.js

export default function About() {
  return <div>About Page</div>;
}
```