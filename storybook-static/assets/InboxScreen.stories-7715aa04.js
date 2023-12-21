import{j as s,a as c}from"./jsx-runtime-e1157db5.js";import{u as g,a as f,f as x,T as v,P as k,s as y,M as T}from"./TaskList.stories-6f70c2f3.js";import{r as b}from"./index-83a10e79.js";import{r as E}from"./index-f2529a6e.js";import{w as I,a as S,f as o}from"./index-1e85c131.js";import"./Task.stories-6a415098.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./index-ebb845b4.js";import"./index-356e4a49.js";function u(){const{error:a}=g(t=>t.taskbox),e=f();return b.useEffect(()=>{e(x())},[]),a?s("div",{className:"page lists-show",children:c("div",{className:"wrapper-message",children:[s("span",{className:"icon-face-sad"}),s("p",{className:"title-message",children:"Oh no!"}),s("p",{className:"subtitle-message",children:"Something went wrong"})]})}):c("div",{className:"page lists-show",children:[s("nav",{children:s("h1",{className:"title-page",children:"Taskbox"})}),s(v,{})]})}u.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};var w=E();const P={component:u,title:"InboxScreen",decorators:[a=>s(k,{store:y,children:a()})],tags:["autodocs"]},r={parameters:{msw:{handlers:[w.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(a,e,t)=>e(t.json(T.tasks)))]}},play:async({canvasElement:a})=>{const e=I(a);await S(async()=>{await o.click(e.getByLabelText("pinTask-1")),await o.click(e.getByLabelText("pinTask-3")),await o.click(e.getByLabelText("archiveTask-5"))})}},n={parameters:{msw:{handlers:[w.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(a,e,t)=>e(t.status(403)))]}}};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // await waitForElementToBeRemoved(await canvas.getByTestId("loading"));
    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText("pinTask-1"));
      await fireEvent.click(canvas.getByLabelText("pinTask-3"));
      await fireEvent.click(canvas.getByLabelText("archiveTask-5"));
    });
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const R=["Default","Error"];export{r as Default,n as Error,R as __namedExportsOrder,P as default};
//# sourceMappingURL=InboxScreen.stories-7715aa04.js.map
