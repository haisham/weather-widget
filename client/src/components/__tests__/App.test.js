
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import WeatherWidget from '../../containers/weather-widget';
const mockStore = configureMockStore();
const store = mockStore({});
configure({adapter: new Adapter()});
describe("Weather widget", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <WeatherWidget/>
                </Provider>
            ).exists()
        ).toBe(true);
    });
});