describe('LearnJS', function() {
  it('can show a problem view', function(){
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  });

  it('show the landing page when there is not hash', function(){
    learnjs.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });
});
