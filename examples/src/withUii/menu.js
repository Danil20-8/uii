import { poolSwitch, div, span, useStore, list, button, Component } from "../../../uii";
import { pushState, popState } from "../../../router";

class MenuComponent extends Component {
    constructor(context) {
        super(null, context);
    }

    awake() {
        this.state = this.state || useStore({
            active: false
        });
    }

    component({ title, options }) {

        return div({
            style: "position: relative;"
        },
            header({ title, active: this.state.active, toggle: () => pushState(null, null, this)}),
            poolSwitch(
                {
                    active: () => this.state.active.valueOf(),
                    component: () =>
                        div({ style: "position:absolute; z-index: 10; top: 0; background-color: yellow;" },
                            [
                                header({ title, active: () => this.state.active, toggle: () => popState()}),
                                body({ options })
                            ]
                        )
                }
            )
        )
    }

    onenter() {
        console.log("Enter");
        this.state.active = true;
    }
    onexit() {
        console.log("Exit");
        this.state.active = false;
    }
}

function header({ title, active, toggle }) {
    return div({},
        button({
            innerText: () => active.valueOf() ? "close" : "open",
            onclick: toggle
        }),
        span({ innerText: title, style: "margin-left: 20px" })
    );
}
function body({ options }) {
    return div({},
        list({
            data: options,
            component: (data) =>
                div({},
                    button({
                        innerText: data.title,
                        onclick: () => {
                            data.trigger();
                        }
                    })
                )
        })
    );
}

export function menuComponent(context) { return new MenuComponent(context); }