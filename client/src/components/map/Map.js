import React from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE } from "../../constants";

import "./style.css";

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 3:
      return "tree";
    case 4:
      return "chest";
    case 5:
      return "rock";
    case 6:
      return "tree";
    case 2:
      return "enemy";
  }
}

function MapTile(props) {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
      }}
    />
  );
}

function MapRow(props) {
  return (
    <div
      className="row"
      style={{
        height: SPRITE_SIZE
      }}
    >
      {props.tiles.map((tile, i) => (
        <MapTile tile={tile} key={i} />
      ))}
    </div>
  );
}

function Map(props) {
  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: "800px",
        height: "480px",
        border: "4px solid white"
      }}
    >
      {props.tiles.map((row, i) => (
        <MapRow tiles={row} key={i} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles
  };
}

export default connect(mapStateToProps)(Map);
