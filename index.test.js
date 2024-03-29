const { findParent, File } = require('./index'); 

const largeTree = () => {
  const root = new File('root');
  const [a,b,c,d, e, f, g, h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z] = 'abcdefghijklmnopqrstuvwxyz'.split('').map(char => new File(char))

  root.addChild(a)
  root.addChild(b)
  a.addChild(c)
  a.addChild(d)
  c.addChild(e)
  c.addChild(f)
  f.addChild(g)
  f.addChild(h)
  h.addChild(i)
  h.addChild(j)
  j.addChild(k)
  j.addChild(l)
  l.addChild(m)
  l.addChild(n)
  n.addChild(o)
  n.addChild(p)
  p.addChild(r)
  p.addChild(s)
  s.addChild(t)
  s.addChild(u)
  u.addChild(v)
  u.addChild(w)
  w.addChild(x)
  w.addChild(y)
  y.addChild(z)
  return {root, a,b,c,d, e, f, g, h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}
} 

describe('findParent function', () => {
  // Test case for a small tree
  test('should return root for a small tree', () => {
    const root = new File('root');
    const a = new File('a');
    const b = new File('b');
    root.addChild(a);
    root.addChild(b);
    const result = findParent(root, a, b);
    expect(result).toBe(root);
  });

  // Test case for a medium-sized tree
  test('should return correct parent for a medium-sized tree', () => {
    const root = new File('root');
    const [a,b,c,d, e, f, g, h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z] = 'abcdefghijklmnopqrstuvwxyz'.split('').map(char => new File(char))

    root.addChild(a)
    root.addChild(b)
    a.addChild(c)
    a.addChild(d)
    c.addChild(h)
    c.addChild(i)
    h.addChild(j)
    h.addChild(k)
    k.addChild(l)
    k.addChild(m)
    l.addChild(p)
    l.addChild(q)

    const result = findParent(root, p, q);
    expect(result).toBe(l);
  });

  // Test case for a large tree
  test('should return correct parent for a large tree', () => {
    const {root, x, y, w} = largeTree()
    const result = findParent(root, x, y);
    expect(result).toBe(w);
  });

  // Additional test cases for edge cases and specific scenarios
  test('should handle edge cases', () => {
    const {root, z, y} = largeTree()

    const result = findParent(root, z, y);
    expect(result).toBe(null);
  });
});
