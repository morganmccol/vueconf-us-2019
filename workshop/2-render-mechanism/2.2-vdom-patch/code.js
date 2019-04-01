export { h, mount } from '../2.1-vdom-mount/code.js'

export function patch(vdom1, vdom2) {
  const isText1 = !!vdom1.text
  const isText2 = !!vdom2.text
  if (isText1 && isText2) {
    patchText(vdom1, vdom2)
  } else if (!isText1 && !isText2) {
    patchElement(vdom1, vdom2)
  } else {
    replaceNode(vdom1, vdom2)
  }
}

function patchText(vdom1, vdom2) {
  const el = vdom2.el = vdom1.el
  if (vdom2.text !== vdom1.text) {
    el.textContent = vdom2.text
  }
}

function patchElement(vdom1, vdom2) {
  if (vdom1.tag !== vdom2.tag) {
    replaceNode(vdom1, vdom2)
    return
  }

  const el = vdom2.el = vdom1.el

  // diff attrs
  // update different ones
  // remove ones that are no longer present

  // diff children
  const oldChildren = vdom1.children
  const newChildren = vdom2.children

  newChildren.forEach((newChild, i) => {
    const oldChild = oldChildren[i]
    if (oldChild) {
      patch(oldChild, newChild)
    } else {
      mount(newChild, el)
    }
  })

  if (oldChildren.length > newChildren.length) {
    oldChildren.slice(newChildren.length).forEach(newChild => {
      if (newChild) {
        patch(oldChild, newChild)
      } else {
        removeNode(oldChild)
      }
    })
  }
}

function replaceNode(vdom1, vdom2) {
  const newDom = mount(vdom2)
  vdom1.dom.parentNode.insertBefore(newDom, vdom1.dom)
  removeNode(vdom1)
}

function removeNode(vdom) {
  vdom.dom.parentNode.removeChild(vdom.dom)
}
