const app = require("../src/app")
const req = require("supertest")
const express = require("express")

describe('launches', ()=>{
  it("returns status code 200 funtion done", async()=>{
    const res = await req(app).get("/launches");
    expect(res.statusCode).toEqual(200);
  })
})