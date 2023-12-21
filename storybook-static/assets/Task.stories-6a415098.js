import{a as l,j as s}from"./jsx-runtime-e1157db5.js";import{P as t}from"./index-8d47fad6.js";function o({task:{id:a,title:c,state:i},onPinTask:b,onArchiveTask:f}){return l("div",{className:`list-item ${i}`,children:[l("label",{htmlFor:"checked",className:"checkbox",children:[s("input",{type:"checkbox",name:"checked",id:`archiveTask-${a}`,"aria-label":`archiveTask-${a}`}),s("span",{className:"checkbox-custom",onClick:()=>f(a)})]}),s("label",{htmlFor:"title",className:"title","aria-label":c,children:s("input",{type:"text",value:c,readOnly:!0,name:"title",placeholder:"Input title"})}),i!=="TASK_ARHIVED"&&s("button",{className:"pin-button",id:`pinTask-${a}`,"aria-label":`pinTask-${a}`,onClick:()=>b(a),children:s("span",{className:"icon-star"})})]})}o.propType={task:t.shape({id:t.string.isRequired,title:t.string.isRequired,state:t.string.isRequired}),onPinTask:t.func,onArchiveTask:t.func};o.__docgenInfo={description:"",methods:[],displayName:"Task"};const A={component:o,title:"Task",tags:["autodocs"]},e={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...e.args.task,state:"TASK_PINNED"}}},n={args:{task:{...e.args.task,state:"TASK_ARCHIVED"}}};var p,d,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,k,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(T=(k=r.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var g,h,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const N=["Default","Pinned","Archived"],I=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:e,Pinned:r,__namedExportsOrder:N,default:A},Symbol.toStringTag,{value:"Module"}));export{e as D,o as T,I as a};
//# sourceMappingURL=Task.stories-6a415098.js.map
