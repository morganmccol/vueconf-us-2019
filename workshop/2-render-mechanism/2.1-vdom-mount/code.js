export function h(tag, attrs, children) {
  return {
    tag,
    attrs,
    children: children && children.map(c => {
      if (typeof c === 'string') {
        return {
          text: c
        }
      } else {
        return c
      }
    })
  }
}

export function mount(vdom, container) {
  if (vdom.text) {
    mountText(vdom, container)
  } else {
    mountElement(vdom, container)
  }
}

function mountElement(vdom, container) {
  const { tag, attrs, children } = vdom

  const el = document.createElement(tag)

  vdom.el = el

  if (attrs) {
    for (const key in attrs) {
      el.setAttribute(key, attrs[key])
    }
  }

  if (children) {
    children.forEach(child => {
      mount(child, el)
    })
  }

  container.appendChild(el)
}

function mountText(vdom, container) {
  const text = document.createTextNode(vdom.text)
  vdom.el = text
  container.appendChild(text)
}
