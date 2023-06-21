<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/category", [CategoryController::class,"index"]);
Route::post("/category", [CategoryController::class,"store"]);
Route::post("/category/edit/{id}", [CategoryController::class, "update"]);
Route::delete("/category/{id}", [CategoryController::class, "delete"]);
Route::get("/category/{id}", [CategoryController::class, "getById"]);
