import React, { Component } from "react";
// import data from "../../data/social-media-data.js";
import fiverr from "../../../data/icons/Fiverr-Logo.png";
import linkedIn from "../../../data/icons/icons8-linkedin-50.png";
import youtube from "../../../data/icons/icons8-play-button-50.png";
import github from "../../../data/icons/icons8-github-50.png";

import "./social-media-nav.css";

class SocialMediaNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFooter: false,
    };
  }

  componentDidMount() {
    if (this.props.isFooter) this.setState({ isFooter: this.props.isFooter });
  }
  render() {
    // console.log({ data });
    return (
      <>
        {!this.state.isFooter ? (
          <nav className="social-nav">
            <a
              className="social-nav__btn"
              href="https://www.fiverr.com/milesoluku"
            >
              <img src={fiverr} />
            </a>
            <a className="social-nav__btn" href="">
              <img src={linkedIn} />
            </a>
            <a className="social-nav__btn" href="">
              <img src={youtube} />
            </a>
            <a className="social-nav__btn" href="https://github.com/milesuno">
              <img src={github} />
            </a>
          </nav>
        ) : (
          <nav className="social-nav">
            <a
              className="social-nav__btn"
              href="mailto:milesoluku@gmail.com?subject=Portfolio Enquires"
            >
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzY2NjY2NiI+PHBhdGggZD0iTTExMywyMi42Yy00OS45MjM0LDAgLTkwLjQsNDAuNDc2NiAtOTAuNCw5MC40YzAsNDkuOTIzNCA0MC40NzY2LDkwLjQgOTAuNCw5MC40YzQ5LjkyMzQsMCA5MC40LC00MC40NzY2IDkwLjQsLTkwLjRjMCwtNDkuOTIzNCAtNDAuNDc2NiwtOTAuNCAtOTAuNCwtOTAuNHpNOTAuNCwxNTguMmMtMjQuOTY1NDcsMCAtNDUuMiwtMjAuMjM0NTMgLTQ1LjIsLTQ1LjJjMCwtMjQuOTY1NDcgMjAuMjM0NTMsLTQ1LjIgNDUuMiwtNDUuMmMxMS43NTIsMCAyMi40NTY4Nyw0LjQ4OTg3IDMwLjQ4NzQsMTEuODQ5OTNsLTEwLjgwMjgsMTAuNTc2OGMtNS4yODA4NywtNC41ODAyNyAtMTIuMTUxMjcsLTcuMzYwMDcgLTE5LjY4NDYsLTcuMzYwMDdjLTE2LjY0MTEzLDAgLTMwLjEzMzMzLDEzLjQ5MjIgLTMwLjEzMzMzLDMwLjEzMzMzYzAsMTYuNjQxMTMgMTMuNDkyMiwzMC4xMzMzMyAzMC4xMzMzMywzMC4xMzMzM2MxNC45MjM1MywwIDI3LjI4NTczLC0xMC44NjMwNyAyOS42ODEzMywtMjUuMTA4NmgtMjkuNjgxMzN2LTE1LjA2NjY3aDQ0LjAxNzI3bDAuMjQ4NiwxLjAwMTkzYzAuNjAyNjcsMi45MjI5MyAwLjkzNDEzLDUuOTQzOCAwLjkzNDEzLDkuMDRjMCwyNC45NjU0NyAtMjAuMjM0NTMsNDUuMiAtNDUuMiw0NS4yek0xNzMuMjY2NjcsMTIwLjUzMzMzdjE1LjA2NjY3aC0xNS4wNjY2N3YtMTUuMDY2NjdoLTE1LjA2NjY3di0xNS4wNjY2N2gxNS4wNjY2N3YtMTUuMDY2NjdoMTUuMDY2Njd2MTUuMDY2NjdoMTUuMDY2Njd2MTUuMDY2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </a>
            <a className="social-nav__btn" href="">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzY2NjY2NiI+PHBhdGggZD0iTTE4MC44LDMwLjEzMzMzaC0xMzUuNmMtOC4zMjQzMywwIC0xNS4wNjY2Nyw2Ljc0MjMzIC0xNS4wNjY2NywxNS4wNjY2N3YxMzUuNmMwLDguMzI0MzMgNi43NDIzMywxNS4wNjY2NyAxNS4wNjY2NywxNS4wNjY2N2gxMzUuNmM4LjMyNDMzLDAgMTUuMDY2NjcsLTYuNzQyMzMgMTUuMDY2NjcsLTE1LjA2NjY3di0xMzUuNmMwLC04LjMyNDMzIC02Ljc0MjMzLC0xNS4wNjY2NyAtMTUuMDY2NjcsLTE1LjA2NjY3ek04Mi41MjAxMywxNjUuNzMzMzNoLTIyLjIyMzMzdi03MS41MDY0aDIyLjIyMzMzek03MS4xODI0Nyw4NC4wMDQyYy03LjE2NDIsMCAtMTIuOTU3MzMsLTUuODA4MiAtMTIuOTU3MzMsLTEyLjk1NzMzYzAsLTcuMTQ5MTMgNS44MDA2NywtMTIuOTQ5OCAxMi45NTczMywtMTIuOTQ5OGM3LjE0MTYsMCAxMi45NDk4LDUuODA4MiAxMi45NDk4LDEyLjk0OThjMCw3LjE0OTEzIC01LjgwODIsMTIuOTU3MzMgLTEyLjk0OTgsMTIuOTU3MzN6TTE2NS43NjM0NywxNjUuNzMzMzNoLTIyLjIwODI3di0zNC43NzM4N2MwLC04LjI5NDIgLTAuMTUwNjcsLTE4Ljk2MTQgLTExLjU0ODYsLTE4Ljk2MTRjLTExLjU2MzY3LDAgLTEzLjM0MTUzLDkuMDMyNDcgLTEzLjM0MTUzLDE4LjM1ODczdjM1LjM3NjUzaC0yMi4yMDgyN3YtNzEuNTA2NGgyMS4zMTkzM3Y5Ljc3MDczaDAuMzAxMzNjMi45NjgxMywtNS42MTk4NyAxMC4yMTUyLC0xMS41NDg2IDIxLjAyNTUzLC0xMS41NDg2YzIyLjUwMjA3LDAgMjYuNjYwNDcsMTQuODEwNTMgMjYuNjYwNDcsMzQuMDY1NzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </a>
            <a className="social-nav__btn" href="">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzY2NjY2NiI+PHBhdGggZD0iTTExMywzMC4xMzMzM2MtMzEuNTM0NTMsMCAtNzIuNDY0MTksNy45MDExNyAtNzIuNDY0MTksNy45MDExN2wtMC4xMDI5OSwwLjExNzcxYy0xNC4zNjI0OCwyLjI5NyAtMjUuMzY2MTUsMTQuNjM4NTYgLTI1LjM2NjE1LDI5LjY0Nzc5djQ1LjJ2MC4wMTQ3MXY0NS4xODUyOXYwLjAxNDcxYzAuMDI4OTUsMTQuODA3ODIgMTAuODEyNTksMjcuNDAwMTcgMjUuNDM5NzEsMjkuNzA2NjRsMC4wMjk0MywwLjA0NDE1YzAsMCA0MC45Mjk2Niw3LjkxNTg4IDcyLjQ2NDE5LDcuOTE1ODhjMzEuNTM0NTMsMCA3Mi40NjQyLC03LjkxNTg4IDcyLjQ2NDIsLTcuOTE1ODhsMC4wMTQ3MSwtMC4wMTQ3MWMxNC42NDM5NSwtMi4zMDE3MyAyNS40Mzg3OCwtMTQuOTEyMzQgMjUuNDU0NDMsLTI5LjczNjA3di0wLjAxNDcxdi00NS4xODUyOXYtMC4wMTQ3MXYtNDUuMmMtMC4wMjE3MywtMTQuODEzNCAtMTAuODA3MSwtMjcuNDE0MDEgLTI1LjQzOTcxLC0yOS43MjEzNWwtMC4wMjk0MywtMC4wNDQxNGMwLDAgLTQwLjkyOTY2LC03LjkwMTE3IC03Mi40NjQyLC03LjkwMTE3ek05MC40LDc4LjMzNDlsNjAuMjY2NjcsMzQuNjY1MWwtNjAuMjY2NjcsMzQuNjY1MXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              />
            </a>
            <a className="social-nav__btn" href="https://github.com/milesuno">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzY2NjY2NiI+PHBhdGggZD0iTTExMywyMi42Yy00OS45MjM0LDAgLTkwLjQsNDAuNDc2NiAtOTAuNCw5MC40YzAsNDIuMzU5OTMgMjkuMTY5MDcsNzcuODA0MjcgNjguNDkzMDcsODcuNjEyNjdjLTAuNDIxODcsLTEuMjIwNCAtMC42OTMwNywtMi42MzY2NyAtMC42OTMwNywtNC4zOTE5M3YtMTUuNDUwODdjLTMuNjY4NzMsMCAtOS44MTU5MywwIC0xMS4zNjAyNywwYy02LjE4NDg3LDAgLTExLjY4NDIsLTIuNjU5MjcgLTE0LjM1MSwtNy42MDExM2MtMi45NjA2LC01LjQ5MTggLTMuNDcyODcsLTEzLjg5MTQ3IC0xMC44MTAzMywtMTkuMDI5MmMtMi4xNzcxMywtMS43MTAwNyAtMC41MTk4LC0zLjY2MTIgMS45ODg4LC0zLjM5NzUzYzQuNjMzLDEuMzEwOCA4LjQ3NSw0LjQ4OTg3IDEyLjA5MSw5LjIwNTczYzMuNjAwOTMsNC43MjM0IDUuMjk1OTMsNS43OTMxMyAxMi4wMjMyLDUuNzkzMTNjMy4yNjE5MywwIDguMTQzNTMsLTAuMTg4MzMgMTIuNzM4ODcsLTAuOTExNTNjMi40NzA5MywtNi4yNzUyNyA2Ljc0MjMzLC0xMi4wNTMzMyAxMS45NjI5MywtMTQuNzgwNGMtMzAuMTAzMiwtMy4wOTYyIC00NC40NjkyNywtMTguMDcyNDcgLTQ0LjQ2OTI3LC0zOC40MDQ5M2MwLC04Ljc1MzczIDMuNzI5LC0xNy4yMjEyIDEwLjA2NDUzLC0yNC4zNTUyN2MtMi4wNzkyLC03LjA4MTMzIC00LjY5MzI3LC0yMS41MjI3MyAwLjc5ODUzLC0yNy4wMjIwN2MxMy41NDQ5MywwIDIxLjczMzY3LDguNzgzODcgMjMuNjk5ODcsMTEuMTU2ODdjNi43NDk4NywtMi4zMTI3MyAxNC4xNjI2NywtMy42MjM1MyAyMS45NTIxMywtMy42MjM1M2M3LjgwNDUzLDAgMTUuMjQ3NDcsMS4zMTA4IDIyLjAxMjQsMy42Mzg2YzEuOTQzNiwtMi4zNTc5MyAxMC4xMzk4NywtMTEuMTcxOTMgMjMuNzE0OTMsLTExLjE3MTkzYzUuNTE0NCw1LjUwNjg3IDIuODcwMiwyMC4wMDg1MyAwLjc2ODQsMjcuMDc0OGM2LjI5Nzg3LDcuMTE5IDEwLjAwNDI3LDE1LjU2Mzg3IDEwLjAwNDI3LDI0LjMwMjUzYzAsMjAuMzE3NCAtMTQuMzQzNDcsMzUuMjg2MTMgLTQ0LjQwMTQ3LDM4LjM5NzRjOC4yNzE2LDQuMzE2NiAxNC4zMDU4LDE2LjQ0NTI3IDE0LjMwNTgsMjUuNTgzMnYyMC41OTYxM2MwLDAuNzgzNDcgLTAuMTczMjcsMS4zNDg0NyAtMC4yNjM2NywyLjAxODkzYzM1LjIyNTg3LC0xMi4zNDcxMyA2MC41MzAzMywtNDUuNzk1MTMgNjAuNTMwMzMsLTg1LjIzOTY3YzAsLTQ5LjkyMzQgLTQwLjQ3NjYsLTkwLjQgLTkwLjQsLTkwLjR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </a>
          </nav>
        )}
      </>
    );
  }
}

export default SocialMediaNav;
