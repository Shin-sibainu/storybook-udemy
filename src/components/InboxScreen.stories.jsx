import { Provider } from "react-redux";
import InboxScreen from "./InboxScreen";
import store from "../lib/store";
import { MockedState } from "./TaskList.stories";
import { rest } from "msw";
import {
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@storybook/testing-library";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          (req, res, ctx) => {
            return res(ctx.json(MockedState.tasks));
          }
        ),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // await waitForElementToBeRemoved(await canvas.getByTestId("loading"));
    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText("pinTask-1"));
      await fireEvent.click(canvas.getByLabelText("pinTask-3"));
      await fireEvent.click(canvas.getByLabelText("archiveTask-5"));
    });
  },
};

export const Error = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          (req, res, ctx) => {
            return res(ctx.status(403));
          }
        ),
      ],
    },
  },
};
